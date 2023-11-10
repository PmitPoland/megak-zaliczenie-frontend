import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ButtonBack} from "../Components/Buttons/ButtonBack";
import {RentEntity} from "../types/rent";
import {OneRent} from "../Components/Rent/OneRent";

export const OneRentView = () => {
    const [rent, setRent] = useState<RentEntity | null>(null);
    const {idRent} = useParams();

    useEffect( ()=> {
        (async ()=> {
            const res = await fetch(`http://localhost:3007/rent/rent/${idRent}`);
            setRent(await res.json());
        })();
    },[]);

    if (rent === null) {
        return null;
    }

    return (
        <div>
            <h1>Wypożyczono</h1>
            <OneRent rent={rent} />
            <ButtonBack action="/rent"/>
        </div>
    )
}
