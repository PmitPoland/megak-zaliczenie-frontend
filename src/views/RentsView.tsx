import React from "react";
import {Rentlist} from "../Components/Rent/RentList";
import {ButtonNewRent} from "../Components/Buttons/ButtonNewRent";

export const RentsView = () => (
    <>
        <Rentlist/>
        <ButtonNewRent action="/rent/add"/>
    </>
)