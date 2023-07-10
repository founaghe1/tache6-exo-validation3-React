import React from "react";
import logo from "../../assets/images/image.png"


export const Contact = () =>{
    return(
        <div className="container-fluid pt-5">
            <div className="row">
                <h2 className="text-center mb-5">RESTONS EN CONTACT</h2>
                <div className="col-md-6 col-sm-12">
                    <input type="text" class="form-control mb-5 py-3 nom"  placeholder="Prénom" /><br />
                    <input type="text" class="form-control py-3 nom"  placeholder="Nom" />
                    <div class="form-floating  ">
                        <textarea class="form-control mt-5 pt-5 textarea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea" className="fs-4">Comments</label>
                    </div>
                    <p className="mt-3 text-end pe-3">
                        <button className="btn1 px-3 shadow rounded">Envoyez</button>
                    </p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="logo">
                        <img src={logo} alt="" width="100%"/>
                    </div>
                </div>
            </div>
            <div className="footer mt-3">

            </div>
        </div>
    )
}