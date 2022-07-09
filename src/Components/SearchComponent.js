import React from 'react';
import SelectFromArray from './SelectFromArrayComponent';
class SearchComponent extends React.Component {
  searchValues = {}
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SelectFromArray idC="origen" data={["BA", "NQN"]} onChange={this.onSelectChange}></SelectFromArray>
        <SelectFromArray idC="destino" data={["BA", "NQN"]} onChange={this.onSelectChange}></SelectFromArray>
        <input type="date" id="fecha" onChange={this.onDateChange}></input>
        <input type="submit" value="Buscar" id="searchBtn" onClick={this.clickSearch}></input>
      </form>
    );
  }

  onSelectChange = (controlID, value) => {
    this.searchValues[controlID] = value;
  }

  onDateChange = (e) => {
    this.searchValues.fecha = e.target.value;
  }

  clickSearch = (e) => {
    e.preventDefault();
    console.log("BUSCO!", this.searchValues)
    this.setState({
      loading: true
    })
    //Llamar al servicio
    //.then(Loading false)
    return false;
  }
}


export default SearchComponent;
