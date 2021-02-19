import React, { Component } from 'react';
import Data from '../Data/Data.json';
import './News.css';

class News extends Component {

    state={ 
            Data: Data
        }

    render() {
        return (
                <div className="data">
                    {   
                        this.state.Data.map( 
                            elemento => {
                                return(
                                    <div className="ND" key={elemento.id}>
                                        <img className="ND-image" src={elemento.image} alt="logo"/>
                                        <a href={elemento.url} target="_BLANK">
                                            <h3 className="ND-title">{elemento.title}</h3>
                                        </a>                                        
                                        <p className="ND-description">{elemento.description}</p>
                                        <div className="ND-foot">
                                            <span className="ND-published"> {elemento.published} </span>
                                            <span className="ND-author">{elemento.author}</span> 
                                        </div>
                                    </div>
                                )
                            
                            }) 
                    }
                </div>
        )
    }
}

export default News;