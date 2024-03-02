import { NavLink } from "react-router-dom";
import "../Styles/sidebar.css"
function Sidebar () {
    return(
        <div class="sidebar">
        <nav class="sidebar__navigation">
            <div class="logo">
                <NavLink href="">
                    <img src="" alt="</Logo>" />
                </NavLink>
            </div>
            <ul>
                <li>
                    <NavLink href="">
                        <span class="fa fa-home"></span>
                        <span>Início</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink href="">
                        <span class="fa fa-search"></span>
                        <span>Buscar</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div class="library">
            <div class="library__content">
                <button class="library__button">
                    <span class="fa fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span class="fa fa-plus"></span>
            </div>
            <section class="section-playlist">
                <div class="section-playlist__content">
                    <span class="text title">Teste</span>
                    <span class="text subtitle">Teste</span>
                    <button class="section-playlist__button">
                        <span>Adicionar</span>
                    </button>
                </div>
            </section>
            <div class="cookies">
                <NavLink href="">Cookies</NavLink>
            </div>
            <div class="languages">
                <button class="languages__button">
                    <span class="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;