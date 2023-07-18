import React from "react";
import Logo from '../assets/Logo.png'

import '../styles/header.css'

export default function Header(){

    return(
        <div className="header">
            <nav className="header__content">
                <img className="header__content__logo" src={Logo} alt="website's logo"/>
                    <div className="header__content__link">
                        Accueil
                    </div>
                    <div className="header__content__link">
                        Profil
                    </div>
                    <div className="header__content__link">
                        Réglages
                    </div>
                    <div className="header__content__link">
                        Communauté
                    </div>
            </nav>
        </div>
    )
}