import React from "react";
import { GiNotebook } from'react-icons/gi';
import { FaProjectDiagram } from'react-icons/fa';
import { FcAddressBook } from'react-icons/fc';
import { SiFireship } from'react-icons/si';


export const Experience = () =>{
    return(
        <div className="experience py-5 px-3">
            <h1 className="text-center mb-5">MES EXPERIENCES</h1>
            <div className="bg-light px-4 py-2 rounded shadow">
                <h3>Developpeur Front-End en alternance ( RNCP niv 6 ),</h3>
                <p className="annos fs-3">Janvier 2021</p>
                <p className="fs-5 lh-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus optio molestias ea consectetur pariatur ratione vero incidunt error aliquid commodi harum qui possimus laborum tempore expedita, mollitia nobis dignissimos.</p>
            </div>
            <div className="bg-light px-4 py-2 rounded shadow mt-5">
                <h3>CS50, Harvard</h3>
                <p className="annos fs-3">Aout-Octobre 2020</p>
                <p className="fs-5 lh-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus optio molestias ea consectetur pariatur ratione vero incidunt error aliquid commodi harum qui possimus laborum tempore expedita, mollitia nobis dignissimos.</p>
            </div>
            <div className="bg-light px-3 py-2 rounded shadow mt-5">
                <h3>Developpeur junior, M2I formation</h3>
                <p className="annos fs-3">Mars-Juillet 2020</p>
                <p className="fs-5 lh-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus optio molestias ea consectetur pariatur ratione vero incidunt error aliquid commodi harum qui possimus laborum tempore expedita, mollitia nobis dignissimos.</p>
            </div>


            <div className="container-fluid py-5 bg-light mt-5 px-4 ">
                <div className="row expert text-light py-4">
                    <div className="col-md-3 col-sm-6">
                        <div className="text-center">
                            <GiNotebook className="fs-1"/>
                            <p className="fs-2">18 projects</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="text-center">
                            <FaProjectDiagram className="fs-1"/>
                            <p className="fs-2">30 algorithmes</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="text-center">
                            <FcAddressBook className="fs-1"/>
                            <p className="fs-2">10 console.log();</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="text-center">
                            <SiFireship className="fs-1"/>
                            <p className="fs-3">16 border:solid red lpx;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}