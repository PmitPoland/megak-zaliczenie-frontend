import React from "react";
import {Userslist} from "../Components/User/Userslist";
import {ButtonNewUser} from "../Components/Buttons/ButtonNewUser";

export const UsersView = () => (
    <>
        <Userslist/>
        <ButtonNewUser action="/user/add"/>
    </>
)