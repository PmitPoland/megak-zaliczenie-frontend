import React from "react";
import {NavLink} from "react-router-dom";


export const Header = () => {
    const colorOfLink = ({ isActive} : {
        isActive: boolean;
    }) => ({color: isActive ? 'lightgray' : 'darkgreen'}
    );       {/*NavLink* - użycie wyjaśnienie D24 (35:15)   */}

    return(
    <>
        <h1>Wypożyczalnia narzędzi "Urwany palec"</h1>
        Menu: <NavLink style={colorOfLink} to="/user">Klienci</NavLink> | <NavLink style={colorOfLink} to="/tool">Narzędzia</NavLink> | <NavLink style={colorOfLink} to="/rent">Wypożycz</NavLink>
        {/*NavLink* - użycie wyjaśnienie D24 (35:15)   */}
        <hr/>
    </>
    )
}

