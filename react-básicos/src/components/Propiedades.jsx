import { PropTypes } from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.número}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.alias}</li>
        <li>{props.array.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las props",
};

Propiedades.propTypes = {
  número: PropTypes.number.isRequired,
};
