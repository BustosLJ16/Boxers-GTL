import React from 'react'

export const ProductCategories = () => {
    return (
    <>
        <div className="container mt-2 pb-5">
            <h1 className="text-center pb-2">Nuestros Catálogos</h1>
            <div className="row justify-content-around">
                <div className="col-md-3 card-container">
                    <div className="card">
                        <img src="https://imgur.com/kkK95g0.jpg" alt="Productos Calvin Klein" className="rounded card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Calvin Klein</h5>
                            <p className="card-text">Boxers Marca Calvin Klein.</p>
                            <p className='d-flex justify-content-center'>
                                <a href="/" className="btn btn-dark ">Ver Catálogo</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 card-container">
                    <div className="card">
                        <img src="https://imgur.com/NIoz3d3.jpg" alt="Producto Medias Tenis" className="rounded card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Medias Tenis</h5>
                            <p className="card-text">Medias 3/4 tipo "Tenis".</p>
                            <p className='d-flex justify-content-center'>
                                <a href="/" className="btn btn-dark ">Ver Catálogo</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 card-container">
                    <div className="card">
                        <img src="https://imgur.com/IV4Wzp1.jpg" alt="Productos Tommy Hilfiger" className="rounded card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Tommy Hilfiger</h5>
                            <p className="card-text">Boxers Marca Tommy Hilfiger.</p>
                            <p className='d-flex justify-content-center'>
                                <a href="/" className="btn btn-dark ">Ver Catálogo</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
