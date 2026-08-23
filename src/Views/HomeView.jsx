import React from "react";
import { ProductsView } from "./ProductsView";
import { ProductDetailView } from "./ProductDetailView";

export const HomeView = () => {
    return (
        <>
        <div className="container d-flex justify-content-center py-4">
                <div id="carouselExampleIndicators" className="carousel slide rounded shadow-sm overflow-hidden" data-bs-ride="carousel" style={{ maxWidth: "900px", width: "100%" }}> 
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="ratio ratio-16x9">
                                <img className="w-100 h-100" style={{ objectFit: "cover" }} src="https://imgur.com/fdCXopl.jpg" alt="First slide"/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="ratio ratio-16x9">
                                <img className="w-100 h-100" style={{ objectFit: "cover" }} src="https://imgur.com/J9rkEsZ.jpg" alt="Second slide"/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="ratio ratio-16x9">
                                <img className="w-100 h-100" style={{ objectFit: "cover" }} src="https://imgur.com/Fp9ZIyp.jpg" alt="Third slide"/>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" style={{ filter: "invert(1) grayscale(100%)" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>

                    <button className="carousel-control-next" style={{ filter: "invert(1) grayscale(100%)" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
            <ProductsView/>
        </>
    );
};
