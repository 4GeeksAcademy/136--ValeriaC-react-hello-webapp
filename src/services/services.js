const BASE_URL = 'https://www.swapi.tech/api';

export const fetchPersonas = async () => {
    try {
        const response = await fetch(`${BASE_URL}/people`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('Error descargando personajes:', error);
        return [];
    }
}

export const fetchPersonaPorId = async (id) => {
    try {
    const response = await fetch(`${BASE_URL}/people/${id}`)
    const data = await response.json();
    return data.result;
    } catch (error) {
        console.log('Error descargando personaje:', error);
        return null;
    }
}

export const fetchVehiculos = async () => {
    try {
        const response = await fetch(`${BASE_URL}/vehicles`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('Error descargando vehiculos:', error);
        return [];
    }
}

export const fetchVehiculoPorId = async (id) => {
    try {
    const response = await fetch(`${BASE_URL}/vehicles/${id}`)
    const data = await response.json();
    return data.result;
    } catch (error) {
        console.log('Error descargando vehiculo:', error);
        return null;
    }
}

export const fetchPlanetas = async () => {
    try {
        const response = await fetch(`${BASE_URL}/planets`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('Error descargando planetas');
        return [];
    }
}

export const fetchPlanetaPorId = async (id) => {
    try {
    const response = await fetch(`${BASE_URL}/planets/${id}`)
    const data = await response.json();
    return data.result;
    } catch (error) {
        console.log('Error descargando planeta:', error);
        return null;
    }
}