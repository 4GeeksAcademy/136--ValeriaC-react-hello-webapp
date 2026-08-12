import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favoritos = () => {
    const { store, dispatch } = useGlobalReducer();

    const eliminarFavorito = (id) => {
        dispatch({
            type: 'eliminar_favorito',
            payload: id
        });
    }

    return (
        <div>
            {store.favoritos.map((favorito) => (
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{favorito.nombre}</h5>
                        <p className="card-text">Tipo: {favorito.tipo}</p>
                        <button className="btn btn-danger" onClick={() => eliminarFavorito(favorito.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
