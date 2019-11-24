import React, { Component } from 'react';
import './App.css';
import Button from './component/Button';
import axios from 'axios';

class App extends Component {

  state = {
    companys: [],
    data: [],
    isShow: false,
    search: '',
    url: '',
    name: ''
  }
  
  
  componentDidMount = () => {
    axios.get('https://test.wertkt.com/api/biz/')
    .then(response => {
      this.setState( { companys: response.data } )
    })
    .catch(error => {
      console.log(error);
    });
  }
  /*  test pour afficher un seul objet de l'api (pas réussis) */

  // test = (event) => {
  //   event.preventDefault();
  //   let url = this.state.url
  //   url = event.target
  //   this.setState({url})
  //   console.log(url);
  //   axios.get('https://test.wertkt.com/api/biz/${url}')
  //   .then(response => {
  //     this.setState( { name: response.data } )
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  handleShow = () => {
    const isShow = !this.state.isShow
    this.setState({isShow}) 
  }
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)})
  }
  render(){
    let filteredArray = this.state.companys.filter(
      (company) => {
        return company.name.indexOf(this.state.search) !== -1;
      }
    );
    const {isShow} = this.state

    let description = null
    let name = null

    if(isShow){
      name = this.state.companys.map(obj => <p key={obj.id} > {obj.name}</p>) /*  Trouver comment renvoyer un seul objet du tableau en fonction du click */
      description = (<Button />)
    }
    return (

      <div className="box">
        <nav className="nav">
          <h1 className="nav__title">Dashboard</h1>
          <h2 className="nav__subtitle">Liste des entreprises :</h2>
          <ul className="nav__list">
            {
              filteredArray.map(company =>{
                return <li key={company.id} onClick={this.handleShow}>{company.name}</li>
              })
            }
          </ul> 
        </nav>
        <div className="dashboard">
          <p className="dashboard__title">Rechercher une entreprise</p>
          <input className="dashboard__input" type='text'
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />    
          <button className="dashboard__button" onClick={this.handleShow}>rechercher</button>
          { description }
        </div>
      </div>
    );
  }
}
export default App;

