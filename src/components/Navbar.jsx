import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="text-decoration-none">
					<span className="navbar-brand mb-0 h1">Star Wars App</span>
				</Link>
				<Link to="/favoritos" className="text-decoration-none">
					❤️ Favoritos ({store.favoritos.length})
				</Link>
			</div>
		</nav>
	);
};