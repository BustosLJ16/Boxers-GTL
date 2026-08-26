import React from 'react'
import { Navbar } from '../Components/navbar'
import { Footer } from '../Components/footer'
import { ProductDetailView } from '../Views/ProductDetailView'

export default function productDetailPage() {
    return (
        <>
        <Navbar/>
        <ProductDetailView/>
        <Footer/>
    </>
    )
}
