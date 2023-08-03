import { Component } from "react";
import data from "./helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
    </li>
    //target="_blank", sirve para abrir cada link en una nueva página del navegador
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    }
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {
            this.state.seasons.map((el) => <li key={el}>{el}</li>)
          }
        </ol>
        <h3>Frameworks frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el, id) => (
            <ElementoLista key={id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}