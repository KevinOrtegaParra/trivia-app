import { Route, Routes } from "react-router-dom"
import Navbar from "../components/ui/NavBar.jsx"
import Footer from "../components/ui/Footer.jsx";
import NotFound from "../components/ui/NotFound.jsx";
import Unauthorized from "../components/ui/Unauthorized.jsx";
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'
import Perfil from '../pages/Perfil.jsx'
import Home from "../pages/Home.jsx"
import Game from "../components/trivia/Game.jsx"
import Ranking from "../components/ranking/Ranking.jsx"
import CompletarPerfil from "../pages/CompletarPerfil.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import Contact from "../pages/Contact";

export default function AppRouter() {

    return (
        <>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/game" element={<ProtectedRoute roles={["ROLE_USER"]}><Game /></ProtectedRoute>} />
                    <Route path="/perfil" element={<ProtectedRoute roles={["ROLE_USER"]}><Perfil /></ProtectedRoute>} />
                    <Route path="/ranking" element={<ProtectedRoute roles={["ROLE_USER"]}><Ranking /></ProtectedRoute>} />
                    <Route path="/completarPerfil" element={<ProtectedRoute roles={["ROLE_USER"]}><CompletarPerfil /></ProtectedRoute>} />
                    <Route path="/unauthorized" element={<Unauthorized />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}