import React from "react";
import {AddUser} from "./AddUser";
import {ButtonBack} from "../Buttons/ButtonBack";

export const AddUserBox = () => (
    <>
        <AddUser/>
        <ButtonBack action="/user"/>
    </>
)
