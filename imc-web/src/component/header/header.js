import React, { Component } from 'react';
import './header.css'; 
import Logo from './logo-1.png';

class Header extends Component{




    render(){
        return(
            <div className="container-fluid container-logo">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="container-img">
                            <img src={Logo} className="img-fluid float-left" alt="Responsive image" />
                        </div>




                    </div>



                </div>


                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                </button>



            </div>



        );
    }


}

export default Header; 