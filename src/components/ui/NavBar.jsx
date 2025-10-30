import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import './Navbar.css'
import { getUserFromToken, hasRole, logoutUsuario } from "../../services/authService";

export default function NavBar() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/Login");
    };
    return (
        <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-text-top"
                    />
                    Trivia Escolar
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <form className="d-flex collapse " role="search" id="navbarNav">
                        <ul className="navbar-nav">
                            {!user && (
                                <>
                                    <NavLink to='/Register' className="nav-link " >
                                        Register
                                    </NavLink>
                                    <NavLink to='/Login' className="nav-link " >
                                        Login
                                    </NavLink>
                                </>
                            )}

                            {user && (
                                <>
                                    <NavLink to='/Game' className="nav-link " >
                                        Game
                                    </NavLink>
                                    <NavLink to='/Ranking' className="nav-link " >
                                        Ranking
                                    </NavLink>
                                </>
                            )}

                            {user?.roles?.includes("ROLE_ADMIN") && (
                                <>
                                    <NavLink to='/users' className="nav-link " >
                                        Gestion Usuarios
                                    </NavLink>
                                </>
                            )}

                            {user && (
                                <div  role="search">
                                    <button className="btn btn-outline-danger " onClick={handleLogout} type="submit">Salir</button>
                                </div>
                            )}
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}