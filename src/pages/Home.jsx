import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {
	fetchPersonas, fetchVehiculos, fetchPlanetas, fetchPersonaPorId,
	fetchVehiculoPorId, fetchPlanetaPorId
} from '../services/services.js';
import { PersonajeCard } from "../components/PersonajeCard.jsx";
import { VehiculoCard } from "../components/VehiculoCard.jsx";
import { PlanetaCard } from "../components/PlanetaCard.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		const descargarDatos = async () => {

			const personas = await fetchPersonas();
			dispatch({
				type: 'set_personas',
				payload: personas
			});

			const vehiculos = await fetchVehiculos();
			dispatch({
				type: 'set_vehiculos',
				payload: vehiculos
			});

			const planetas = await fetchPlanetas();
			dispatch({
				type: 'set_planetas',
				payload: planetas
			});
		};
		descargarDatos();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Star Wars</h1>

			<h2 className="mt-4">Personajes</h2>
			<div className="d-flex flex-wrap justify-content-center gap-3">
				{store.personas?.map((persona) => (
					<PersonajeCard
						key={persona.uid}
						nombre={persona.name}
						uid={persona.uid}
					/>
				))}
			</div>

			<h2 className="mt-4">Vehículos</h2>
			<div className="d-flex flex-wrap justify-content-center gap-3">
				{store.vehiculos?.map((vehiculo) => (
					<VehiculoCard
						key={vehiculo.uid}
						nombre={vehiculo.name}
						uid={vehiculo.uid}
					/>
				))}
			</div>

			<h2 className="mt-4">Planetas</h2>
			<div className="d-flex flex-wrap justify-content-center gap-3">
				{store.planetas?.map((planeta) => (
					<PlanetaCard
						key={planeta.uid}
						nombre={planeta.name}
						uid={planeta.uid}
					/>
				))}
			</div>
		</div>
	);
}; 