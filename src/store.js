export const initialStore=()=>{
    const favoritosGuardados = localStorage.getItem('favoritos')

  return{
    personas: [],
    vehiculos: [],
    planetas: [],
    favoritos: favoritosGuardados? JSON.parse(favoritosGuardados) :[],
    cargando: false,
    error: null,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'set_personas':
      return {
        ...store,
        personas: action.payload
      };

    case 'set_vehiculos':
      return {
        ...store,
        vehiculos: action.payload
      };

    case 'set_planetas':
      return {
        ...store,
        planetas: action.payload
      };

    case 'agregar_favorito':
      const nuevosFavoritos = [...store.favoritos, action.payload];
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
      return {
        ...store,
        favoritos: nuevosFavoritos
      };

    case 'eliminar_favorito':
      const favoritosFiltrados = store.favoritos.filter(fav => fav.id !== action.payload);
      localStorage.setItem('favoritos', JSON.stringify(favoritosFiltrados))
      return {
        ...store,
        favoritos: favoritosFiltrados
      };

    default:
      throw Error('Unknown action.')
  }
}
