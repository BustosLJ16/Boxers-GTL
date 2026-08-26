import React from 'react'

export const Carrousel = () => {
    return (
    <>
        <div className="container d-flex justify-content-center py-2">
            <div id="carouselExampleIndicators" className="carousel slide rounded shadow-sm overflow-hidden" data-bs-ride="carousel" style={{ width: "90%" }}> 
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="ratio ratio-16x9">
                            <img className="w-100 h-100" style={{ objectFit: "cover" }} src="https://imgur.com/fdCXopl.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-caption text-dark d-none d-md-block bg-secondary bg-opacity-75 rounded m-4">
                            <h5 className='text-white'>Productos Minoristas</h5>
                            <p className='text-white'>Contamos con una gran variedad y selección de productos premium esperandote.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="ratio ratio-16x9">
                            <img className="w-100 h-100" style={{ objectFit: "cover" }} src="https://imgur.com/J9rkEsZ.jpg" alt="Second slide"/>
                        </div>
                        <div className="carousel-caption text-dark d-none d-md-block bg-secondary bg-opacity-75 rounded m-4">
                            <h5 className='text-white'>Boxers - Medias - Indumentaria</h5>
                            <p className='text-white'>En Boxers GTL, tenemos todo lo que buscas y mucho más.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="ratio ratio-16x9">
                            <img className="w-100 h-100" style={{ objectFit: "cover" }} src="https://imgur.com/UkqsJjV.jpg" alt="Third slide"/>
                        </div>
                        <div className="carousel-caption text-dark d-none d-md-block bg-secondary bg-opacity-75 rounded m-4">
                            <h5 className='text-white'>Productos Mayoristas</h5>
                            <p className='text-white'>Contamos con promos Mayoristas para que sumes a tu Local / Emprendimiento.</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" style={{ filter: "invert(1) grayscale(100%)" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" style={{ filter: "invert(1) grayscale(100%)" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="visually-hidden">Siguiente</span>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </>
    )
}
