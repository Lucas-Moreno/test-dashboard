import React, { Component } from 'react'
import ButtonDetails from './ButtonDetails'
import './Details.css';

class Details extends Component {

  render() {
    return(
      <div>
        <h1 className="title">Détail de l’entreprise :</h1>
        <div className="container">
          <p className="results">Résultat financier en 2016 :</p>
          <p className="results">Résultat financier en 2017 :</p>
        </div>
        <p className="compare">Comparaison des deux années :</p>
        <ButtonDetails />
      </div>
    )
  }
}


export default Details