import React from 'react'
import { Navbar } from '../Components/navbar'
import { Footer } from '../Components/footer'
import { HomeView } from '../Views/HomeView'

export default function HomePage() {
    return (
    <>
        <Navbar/>
        <HomeView/>
        <Footer/>
    </>
    )
}
