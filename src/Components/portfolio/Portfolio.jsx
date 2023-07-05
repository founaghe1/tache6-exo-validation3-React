import React from "react";
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';
import card5 from '../../assets/images/card5.png';
import card6 from '../../assets/images/card6.png';

export const Portfolio = () =>{
    return(
        <div className="container-fluid portfolio my-3">
            <div className="row px-4 py-5">
                <div className="col-md-4 col-sm-6 my-2">
                    <div className="p-4 card shadow text-center bg-light">
                        
                        <p className="d-flex justify-content-center">
                            <img src={card1} alt="" width={220} />
                        </p>
                        <h3 className="mt-3 company">Volkeno</h3>
                        <p className="fw-bold px-md-4">Créer une équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. </p>
                        <p className="fw-bold">#React #API #Redux</p>
                        <button className="btn">Voir le projet github</button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 my-2">
                    <div className="p-4 card shadow text-center bg-light">
                        <p className="d-flex justify-content-center">
                            <img src={card2} alt="" width={220} />
                        </p>
                        <h3 className="mt-3 company">Fewnu</h3>
                        <p className="fw-bold px-md-4">Créer une équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. </p>
                        <p className="fw-bold">#React #API #Redux</p>
                        <button className="btn">Voir le projet github</button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 my-2">
                    <div className="p-4 card shadow text-center bg-light">
                        <p className="d-flex justify-content-center">
                            <img src={card3} alt="" width={220} />
                        </p>
                        <h3 className="mt-3 company">Fewnu mobile</h3>
                        <p className="fw-bold px-md-4">Créer une équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. </p>
                        <p className="fw-bold">#React #API #Redux</p>
                        <button className="btn">Voir le projet github</button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 my-2">
                    <div className="p-4 card shadow text-center bg-light">
                        <p className="d-flex justify-content-center">
                            <img src={card4} alt="" width={220} />
                        </p>
                        <h3 className="mt-3 company">Volkeno</h3>
                        <p className="fw-bold px-md-4">Créer une équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. </p>
                        <p className="fw-bold">#React #API #Redux</p>
                        <button className="btn">Voir le projet github</button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 my-2">
                    <div className="p-4 card shadow text-center bg-light">
                        <p className="d-flex justify-content-center">
                            <img src={card5} alt="" width={220} />
                        </p>
                        <h3 className="mt-3 company">Bakeli payement</h3>
                        <p className="fw-bold px-md-4">Créer une équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. </p>
                        <p className="fw-bold">#React #API #Redux</p>
                        <button className="btn">Voir le projet github</button>
                    </div>
                </div>
                <div className="col-md-4  col-sm-6 my-2">
                    <div className="p-4 card shadow text-center bg-light">
                        <p className="d-flex justify-content-center">
                            <img src={card6} alt="" width={220} />
                        </p>
                        <h3 className="mt-3 company">Mixte Feewi</h3>
                        <p className="fw-bold px-md-4">Créer une équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. </p>
                        <p className="fw-bold">#React #API #Redux</p>
                        <button className="btn">Voir le projet github</button>
                    </div>
                </div>
            </div>
        </div>
    )
}