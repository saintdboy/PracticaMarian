import React from 'react';

class SelectFromArray extends React.Component {
  idC = null;
  data = null;
  selectedValue = null;
  onChangeEvent = null;
  constructor(props) {
    super(props);
    this.idC = props.idC;
    this.data = props.data;
    this.selectedValue = this.data[0];
    this.onChangeEvent = props.onChange;
  }

  onChange(e) {
    var ef = document.getElementById(this.idC);
    this.selectedValue = ef.value;
    if(this.onChangeEvent)
      this.onChangeEvent(this.idC, ef.value);
  }

  render() {
    return (
      <select id={this.idC} onChange={x=>this.onChange(x)}>
        {this.data.map(x =>
          <option>{x}</option>)}
      </select>
    );
  }
}
export default SelectFromArray;
