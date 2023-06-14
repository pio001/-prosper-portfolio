import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Carrousel from '../components/carrousel/Carrousel'
import AboutCard from '../components/about/AboutCard'
import ProjectCard from '../components/project/ProjectCard'
import Form from '../components/form/Form'


function Home() {
  return (
    <div>
        <Navbar/>
        <Carrousel/>
        <AboutCard/>
        <ProjectCard/>
        <Form/>
        <Footer/>

    </div>
  )
}

export default Home