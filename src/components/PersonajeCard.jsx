import useGlobalReducer from "../hooks/useGlobalReducer";

export const PersonajeCard = ({ nombre, uid }) => {
    const { dispatch } = useGlobalReducer();

    const agregarAFavoritos = () => {
        dispatch({
            type: 'agregar_favorito',
            payload: {
                id: uid,
                nombre: nombre,
                tipo: 'personaje'
            }
        });
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/300x400?text=Sin+Imagen";
                }}
                className="card-img-top"
                alt={nombre}
            />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <div className="d-flex justify-content-between">
                    <a href={`/single/personaje/${uid}`} className="btn btn-primary">
                        Ver detalles
                    </a>
                    <button className="btn btn-outline-danger" onClick={agregarAFavoritos}>
                        ❤️
                    </button>
                </div>
            </div>
        </div>
    );
};