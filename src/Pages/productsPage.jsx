import React from 'react'
import {Navbar} from '../Components/navbar'
import {Footer} from '../Components/footer'
import { ProductsView } from '../Views/ProductsView'

export default function ProductsPage(){
    return (
    <>
    <Navbar/>
    <ProductsView/>
    <Footer/>
    </>
    )
}
