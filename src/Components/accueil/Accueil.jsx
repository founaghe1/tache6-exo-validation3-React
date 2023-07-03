import React from "react";
import logo from "../../assets/images/image.png"
import wave from '../../assets/images/wave.png'
import waveBg from '../../assets/images/waveBg.png';
import { GiSmartphone } from 'react-icons/gi'
import { GrMail } from 'react-icons/gr'
import { BsFillHouseFill } from 'react-icons/bs'
import { BiSolidSchool } from'react-icons/bi'


export const Accueil = () =>{
    return(
        <div className="container-fluid accueil p-0 pt-5">
            <div className="row pt-5 px-5 row1 mx-md-3 mt-4">
                <div className="col-md-8 text-light name">
                    <h1>Hello ! je suis <span className="text-warning">MOHAMED SARIFOU</span> Developpeur frontend senior à Bakeli</h1>
                    <div className="d-flex justify-content-between align-items-center text-light mt-5 contact px-md-5 rounded">
                        <p className="fs-5"><span> <GiSmartphone className="text-warning fs-4"/> </span> 70 519 96 72</p>
                        <p className="fs-5"><span> <GrMail className="text-warning fs-4"/> </span> mohamed@gamil.com</p>
                        <p className="fs-5"><span> <BsFillHouseFill className="text-warning fs-4"/> </span>  Liberté 6 Dakar</p>
                        <p className="fs-5"><span> <BiSolidSchool className="text-warning fs-4"/> </span> Bakeli</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="position-relative waves">
                <img src={wave} alt="" className="position-absolute" width="100%"/>
                <img src={waveBg} alt="" className="waveBg" width="100%" />
            </div>
        </div>
    )
}