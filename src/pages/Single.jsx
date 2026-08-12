import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchPersonaPorId, fetchVehiculoPorId, fetchPlanetaPorId } from "../services/services";

export const Single = ({ tipo }) => {
  const { theId } = useParams();
  const [detalle, setDetalle] = useState(null);

  const fetchSegunTipo = {
    personaje: fetchPersonaPorId,
    vehiculo: fetchVehiculoPorId,
    planeta: fetchPlanetaPorId
  };

  useEffect(() => {
    const cargarDetalle = async () => {
      const funcionCorrecta = fetchSegunTipo[tipo];
      const data = await funcionCorrecta(theId);
      setDetalle(data);
    };
    cargarDetalle();
  }, [theId, tipo]);

  return (
    <div className="container text-center mt-5">
      <h1>{detalle?.properties?.name}</h1>
      <hr className="my-4" />

      {tipo === 'personaje' && (
        <div>
          <p>Altura:{detalle?.properties?.height} cm</p>
          <p>Peso: {detalle?.properties?.mass} kg</p>
          <p>Color de cabello: {detalle?.properties?.hair_color}</p>
          <p>Color de ojos: {detalle?.properties?.eye_color}</p>
          <p>Género: {detalle?.properties?.gender}</p>
        </div>
      )}

      {tipo === 'vehiculo' && (
        <div>
          <p>Modelo: {detalle?.properties?.model}</p>
          <p>Fabricante: {detalle?.properties?.manufacturer}</p>
          <p>Costo: {detalle?.properties?.cost_in_credits} créditos</p>
          <p>Velocidad máxima: {detalle?.properties?.max_atmosphering_speed}</p>
        </div>
      )}

      {tipo === 'planeta' && (
        <div>
          <p>Clima: {detalle?.properties?.climate}</p>
          <p>Terreno: {detalle?.properties?.terrain}</p>
          <p>Población: {detalle?.properties?.population}</p>
          <p>Diámetro: {detalle?.properties?.diameter}</p>
        </div>
      )}

      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>

  );
};