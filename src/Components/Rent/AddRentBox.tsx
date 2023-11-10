import React from "react";
import {ButtonBack} from "../Buttons/ButtonBack";
import {AddRent} from "./AddRent";

export const AddRentBox = () => (
    <>
        <AddRent />
        <ButtonBack action="/rent"/>
    </>
)
