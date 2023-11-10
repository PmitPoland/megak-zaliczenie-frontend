import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css"

export const Header = () => {
    const colorOfLink = ({ isActive} : {
        isActive: boolean;
    }) => ({color: isActive ? 'lightgray' : 'darkgreen'}
    );       {/*NavLink* - użycie wyjaśnienie D24 (35:15)   */}

    return(
    <div className="Header">
        <h1 className="H1">"Zmieszany klient"- Wypożyczalnia narzędzi</h1>

        <NavLink style={colorOfLink} to="/user">Klienci</NavLink> | <NavLink style={colorOfLink} to="/tool">Narzędzia</NavLink> | <NavLink style={colorOfLink} to="/rent">Wypożyczenia</NavLink>
        <hr/>
    </div>
    )
}

