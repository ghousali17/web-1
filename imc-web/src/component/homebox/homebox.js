import React, {Component} from 'react';
import './homebox.css';



class HomeBox extends Component{
    render(){
        return(
        <div className="container-homebox container-flex">
        <div className="row">
            
        <div className="col-md-7">
        <div className="outerbox">
        <div className="middlebox">
        <div className="innerbox">
        <h1 class="display-5" id="home">About Us</h1>
        <p class="text" align="justify">
          <b>Iqra Medical Centre</b> is a charitable hospital started by Dr.Nargis Fatima. Our branches in Orangi Town and North Karachi have now been serving the local population for more than 20 years. Both of our branches are equipped with state-of-the-art medical equipme-nts. Our faculty ranges from accomplished doctors to highly trained junior medical staff members. It is our aim to set a precedence for quality medical care in Karachi, irrespective of the financial back-ground of our patients.
 
        </p>
        </div>    
        </div>
            
        </div>    
            
            
        </div>
        <div className="col-md-5 col-margin"></div>
                
        </div>    
            
            
            
        </div>);
    }
    
}

export default HomeBox;