import React from 'react'
import ProductDetailView from '../Views/ProductDetailView'
import { Navbar } from '../Components/navbar'
import { Footer } from '../Components/footer'

export default function ProductDetailPages() {
    return (
    <>
        <Navbar/>
        <ProductDetailView/>
        <Footer/>
    </>
    )
}
