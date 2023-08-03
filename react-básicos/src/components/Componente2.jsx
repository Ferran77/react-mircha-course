import { Component } from "react";

//Componente basado en clases:
//Por default de de llevar un método render
class Componente2 extends Component {
  render() {
    return <h2>{this.props.msg}</h2>
  }
}


//Para llamar al componente en la aplicación, se importa en el componente padre (en este caso App.jsx)
export default Componente2;