import React from "react";

export const Compentences = () =>{
    return(
        <div className="container-fluid py-4">
            <h1 className="text-center mb-5">MES COMPETENCES</h1>
            <div className="row ">
                <div className="col-md-6 col-sm-12">
                    <div>
                        <p className="py-2 outils fs-2 text-end pe-4">OUTILS</p>

                        <div className="d-flex justify-content-around pe-4">

                            <div className="outilPrinci w-100 bar">
                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3">
                                        <div className="progress" ></div>
                                    </div>
                                   
                                </div>

                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3 d-flex justify-content-end">
                                        <div className="progress1 rounded " ></div>
                                    </div>
                                    
                                </div>

                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3 d-flex justify-content-end">
                                        <div className="progress2 rounded" ></div>
                                    </div>
                                    
                                </div>

                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3 d-flex justify-content-end">
                                        <div className="progress3 rounded" ></div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="text">
                                <p className="fw-bold fs-4">BOOTSTRAP</p>

                                <p className="fw-bold fs-4">LARAVEL</p>

                                <p className="fw-bold fs-4">REACT_JS</p>

                                <p className="fw-bold fs-4">DJANGO</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-md-6 col-sm-12">

                <div>
                        <p className="py-2 outils fs-2  ps-4">LANGAGES</p>

                        <div className="d-flex justify-content-around px-4">

                            <div className="text">
                                <p className="fw-bold fs-4">HTML</p>

                                <p className="fw-bold fs-4">CSS</p>

                                <p className="fw-bold fs-4">JAVASCRIPT</p>

                                <p className="fw-bold fs-4">PHP</p>
                            </div>

                            <div className="outilPrinci w-100 bar">
                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3">
                                        <div className="progress" ></div>
                                    </div>
                                   
                                </div>

                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3 ">
                                        <div className="progress1 rounded " ></div>
                                    </div>
                                    
                                </div>

                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3 ">
                                        <div className="progress2 rounded" ></div>
                                    </div>
                                    
                                </div>

                                <div className="d-flex justify-content-around">
                                    <div class="border rounded w-75 mt-3 ">
                                        <div className="progress3 rounded" ></div>
                                    </div>
                                    
                                </div>
                            </div>
                            

                        </div>

                    </div>

                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 col-sm-12">
                    <div className="text-md-end pe-5">
                        <h2 className="lang">LANGUES</h2>
                        <p className="fs-3 pe-5">FRANCAIS</p>
                        <p className="fs-3 pe-5">ANGLAIS</p>
                        <p className="fs-3 pe-5">POULAAR</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="ps-md-5">
                        <h2 className="hobbi">HOBBIES</h2>
                        <p className="fs-3 ps-md-5">Createur du blog "Mon travail de dev"</p>
                        <p className="fs-3 ps-md-5">Le developpement web en general</p>
                        <p className="fs-3 ps-md-5">PWA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}