import React from "react";

export const Presentation = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <h1 className="text-center mb-5">PRESENTATION</h1>
                <div className="col-md-6 ps-4">
                    <p><span className="num px-2 rounded-circle py-1 fw-bold text-light me-2">1</span> <span className="fw-bold fs-3">Capacité d'apprentissage</span></p>

                    <p><span className="num px-2 rounded-circle py-1 fw-bold text-light me-2">2</span> <span className="fw-bold fs-3">Collaboration</span></p>

                    <p><span className="num px-2 rounded-circle py-1 fw-bold text-light me-2">3</span> <span className="fw-bold fs-3">Responsabilité</span></p>

                    <p><span className="num px-2 rounded-circle py-1 fw-bold text-light me-2">4</span> <span className="fw-bold fs-3">Prise de décision</span></p>

                    <p><span className="num px-2 rounded-circle py-1 fw-bold text-light me-2">5</span> <span className="fw-bold fs-3">Gestion du temps</span></p>
                </div>
                <div className="col-md-6">
                    <h3 className="text-success fw-bold">Trifforce !</h3>
                    <p className="fw-bold">
                        À l'écoute, je suis FORCE de proposition, j'aime chercher des solutions 
                        et ainsi rendre services. Passionné par l'apprentissage et la découverte 
                        intellectuelle, j'ai développé une FORCE de travail afin de toujours 
                        progresser au quotidien. FORCE tranquille, j'ai toujours su collaborer et
                        pleinement m'intégrer au sein du collectif.
                    </p>
                    <p className="mt-4 fw-bold"> 
                        Besoin d'un collaborateur flexible et persévérant ?
                        Je vous propose mes services par le biais d'une ALTERNANCE. Avec 4 
                        jours dans votre société et 1 jour en formation, le tout modulable comme 
                        vous le souhaitez, je pourrais facilement répondre à vos besoins.
                    </p>
                </div>
            </div>
        </div>
    )
}