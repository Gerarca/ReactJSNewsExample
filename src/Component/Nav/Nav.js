import React from 'react';
import Radium from 'radium';
import BtnGoUp from '../Utility/btnGoUp';
import './Nav.css';

function Nav(open){

    const StyleCompleted = { 
        "@media(max-width: 700px)":{
            left: open.open ? "0" : "-100%" ,
            position: "fixed",
            width: "100%",
            minWidth: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "center",
            height: "90vh",
            transition: "left 0.3s linear"           
        }
    } 

    function refreshPage() {
        
      }

    return (       
        <nav className="navbar-fixed-left" style={StyleCompleted}> 
            <a className="menu-link" onClick={refreshPage}> Home             </a>
            <a className="menu-link" onClick={refreshPage}> Coronavirus      </a>
            <a className="menu-link" onClick={refreshPage}> World            </a>
            <a className="menu-link" onClick={refreshPage}> Africa           </a>
            <a className="menu-link" onClick={refreshPage}> Asia             </a>
            <a className="menu-link" onClick={refreshPage}> Australia        </a>
            <a className="menu-link" onClick={refreshPage}> Europe           </a>
            <a className="menu-link" onClick={refreshPage}> Latin America    </a>                 
            <a className="menu-link" onClick={refreshPage}> Middle East      </a>                       
            <div id="BtnGoUp">
                <BtnGoUp/>
            </div>
        </nav>
    )

}

export default Radium(Nav);


