import { Component } from "react";

//Componente basado en clases:
//Por default de de llevar un método render ==>
class Componente extends Component {
  render() {
    return <h2>Hola culos, son un componente</h2>
  }
}

//////////////////////////////////////////////

//Componente funcional (Con función declarada):

// function Componente(props) {
//   return < h2 > {props.msg}</ h2>;
// }

//Componente funcional con arrow function:

//export const Componente = (props) => <h2>{props.msg}</h2>





//El componente basado en clases, se utiliza menos a raíz de la llegada de los hooks
//Para llamar al componente en la aplicación, se importa en el componente padre (en este caso App.jsx)
export default Componente;
