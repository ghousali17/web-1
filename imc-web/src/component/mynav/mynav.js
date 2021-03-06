import React, { Component } from 'react';
import './mynav.css'; 


class MyNav extends Component{

    render(){

        return(
            <div className="container-nav">
                <nav className="mynav navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#" ></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#location">Timing<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#doctors">Doctors<span className="sr-only">(current)</span></a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="#donate">Donate<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#appointment">Make Appointment<span className="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Locations
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#nk">North Karachi</a>
                                     <a class="dropdown-item" href="#ot">Orangi Town</a>
                                   
                                   
                                </div>
                            </li>





                        </ul>

                    </div>
                </nav>


            </div>



        );
    }

}

export default MyNav;
