"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"

const DefaultCursorSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.5 }}
    >
      <g filter="url(#filter0_d_91_7928)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="black"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="white"
          strokeWidth={2.25825}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_91_7928"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_91_7928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_91_7928"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}) {
  // hide cursor on touch / mobile devices
  const [isTouch, setIsTouch] = useState(false)

  const lastMousePos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const previousAngle = useRef(0)
  const accumulatedRotation = useRef(0)

  // make springs faster by default (you can still override via prop)
  const fastSpringConfig = {
    ...springConfig,
    stiffness: (springConfig.stiffness || 400) * 1.8,
    damping: Math.max(20, (springConfig.damping || 45) * 0.7),
    mass: (springConfig.mass || 1) * 0.9,
  }

  const cursorX = useSpring(0, fastSpringConfig)
  const cursorY = useSpring(0, fastSpringConfig)
  const rotation = useSpring(0, {
    ...fastSpringConfig,
    damping: 40,
    stiffness: (fastSpringConfig.stiffness || 600) * 1.0,
  })
  const scale = useSpring(1, {
    ...fastSpringConfig,
    stiffness: 700,
    damping: 30,
  })

  useEffect(() => {
    // detect touch / mobile to hide the custom cursor
    const touchDetected = () => {
      const hasTouch =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0 ||
          (window.matchMedia && window.matchMedia("(pointer:coarse)").matches))
      setIsTouch(Boolean(hasTouch))
    }

    touchDetected()
    // also listen for changes (e.g. docking/undocking)
    const mm = window.matchMedia && window.matchMedia("(pointer:coarse)")
    const onChange = () => touchDetected()

    if (mm && mm.addEventListener) mm.addEventListener("change", onChange)
    window.addEventListener("resize", onChange)

    return () => {
      if (mm && mm.removeEventListener) mm.removeEventListener("change", onChange)
      window.removeEventListener("resize", onChange)
    }
  }, [])

  useEffect(() => {
    if (isTouch) {
      // ensure default cursor shows on touch devices
      document.body.style.cursor = "auto"
      return
    }

    const updateVelocity = (currentPos) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastUpdateTime.current || 16

      velocity.current = {
        x: (currentPos.x - lastMousePos.current.x) / deltaTime,
        y: (currentPos.y - lastMousePos.current.y) / deltaTime,
      }

      lastUpdateTime.current = currentTime
      lastMousePos.current = currentPos
    }

    const smoothMouseMove = (e) => {
      const currentPos = { x: e.clientX, y: e.clientY }
      updateVelocity(currentPos)

      // stronger sensitivity multiplier to make cursor "feel" faster
      const sensitivity = 1.6
      const speed = Math.sqrt(
        (velocity.current.x * sensitivity) ** 2 +
          (velocity.current.y * sensitivity) ** 2
      )

      // set target positions directly (springs will smooth)
      cursorX.set(currentPos.x)
      cursorY.set(currentPos.y)

      // rotation: multiply angle change to make rotation react faster
      if (speed > 0.02) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90

        let angleDiff = currentAngle - previousAngle.current
        if (angleDiff > 180) angleDiff -= 360
        if (angleDiff < -180) angleDiff += 360

        // amplify quick turns so rotation is more noticeable
        accumulatedRotation.current += angleDiff * 1.8
        rotation.set(accumulatedRotation.current)
        previousAngle.current = currentAngle

        // slight shrink while moving
        scale.set(0.92)

        // clear previous timeout faster
        const t = setTimeout(() => {
          scale.set(1)
        }, 120)

        // clean up in case of rapid move events
        return () => clearTimeout(t)
      }
    }

    let rafId = 0
    const onMove = (e) => {
      // remove coarse throttling: allow RAF to schedule updates every frame
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e)
        rafId = 0
      })
    }

    // hide native cursor and bind
    document.body.style.cursor = "none"
    window.addEventListener("mousemove", onMove)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.body.style.cursor = "auto"
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY, rotation, scale, isTouch])

  if (isTouch) return null

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale: scale,
        zIndex: 100,
        pointerEvents: "none",
        willChange: "transform",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      {cursor}
    </motion.div>
  )
}
