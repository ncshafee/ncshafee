import React from 'react'
import Header from '../componets/Header'
import Portfolio from '../componets/Landing/Hero'
import ProjectsPage from '../componets/Landing/Projects'
import ExperiencePage from '../componets/Landing/Expirence'
import Education from '../componets/Landing/Education'
import Skill from '../componets/Landing/Skill'
import ContactSection from '../componets/Landing/Contact'
import FooterSection from '../componets/Landing/Last'
import FooterBottom from '../componets/Landing/footer'
import ToolsSection from '../componets/Landing/Tools'
import ImageTrail from '../componets/Gallery/ImageTrail'
import image1 from "../assets/shafeeq.jpg"
import image2 from "../assets/shafeekali.jpg"
import image3 from "../assets/rounded.jpg"
import image4 from "../assets/portfolio shafeek ali.jpg"
import image5 from "../assets/shafee2.jpg"
import image6 from "../assets/portfolio5.jpg"
import image7 from "../assets/portfolio7.jpg"
import image8 from "../assets/chat gbt.jpg"
import AboutPage from '../componets/Landing/About'
function Home() {
  return (
    <div className="theme-surface transition-colors duration-300">
      <Header></Header>
      <Portfolio />
      <AboutPage></AboutPage>
      <ToolsSection></ToolsSection>
      <ProjectsPage></ProjectsPage>
      <ExperiencePage></ExperiencePage>
      <Education></Education>
      <Skill></Skill>
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
        <ImageTrail

          items={[
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            // ...
          ]}
          variant={1}
        />
      </div>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
      <FooterBottom></FooterBottom>

    </div>
  )
}

export default Home
