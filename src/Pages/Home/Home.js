import React from 'react'
import Hero from '../Home/Hero'
import Form from './Form'
import Projects from './Projects'
import Skills from './Skills'

function Home() {
    return (
        <>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <Form></Form>
        </>
    )
}

export default Home