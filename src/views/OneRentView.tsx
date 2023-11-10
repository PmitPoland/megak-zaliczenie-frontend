import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ButtonBack} from "../Components/Buttons/ButtonBack";
import {RentEntity} from "../types/rent";
import {OneRent} from "../Components/Rent/OneRent";

export const OneRentView = () => {
    const [rent, setRent] = useState<RentEntity | null>(null);
    const {idRent} = useParams();  // Destrukturyzacja z params

    useEffect( ()=> {           // aby można było odczytać zapytanie z backendu
        (async ()=> {
            const res = await fetch(`http://localhost:3007/rent/rent/${idRent}`);
            setRent(await res.json());
        })();
    },[]);

    console.log('OneRentView rent', rent);
    console.log("OneRentView", idRent);

    if (rent === null) {
        return null;
    }

    // const {idUser} = useParams();  // Destrukturyzacja z params
    //console.log('ID User', user.idUser);

    // if (res.status === 500 || res.status === 400) {
    //     const error = await res.json()
    //     alert ('Wystąpił błąd. Nie mogę usunąć użytkownika. Spróbuj ponownie później.')
    //     return;   // jak jest błąd to kończymy
    // }

    //props.onUserChange();

    return (
        <div>
            <h1>Wypożyczono</h1>
            <OneRent rent={rent} />
            <ButtonBack action="/rent"/>
        </div>
    )
}
