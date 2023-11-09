import React, {useEffect, useState} from "react";
import {OneUser} from "../Components/User/OneUser";
import {useParams} from "react-router-dom";
import {UserEntity} from "../types/user";
import {ButtonBack} from "../Components/ButtonBack";

export const OneUserView = () => {
    const [user, setUser] = useState<UserEntity | null>(null);
    const {idUser} = useParams();  // Destrukturyzacja z params

    useEffect( ()=> {           // aby można było odczytać zapytanie z backendu
        (async ()=> {
            const res = await fetch(`http://localhost:3007/user/user/${idUser}`);
            setUser(await res.json());
        })();
    },[]);



    if (user === null) {
        return null;
    }

   // const {idUser} = useParams();  // Destrukturyzacja z params
   console.log('ID User', user.idUser);

    // if (res.status === 500 || res.status === 400) {
    //     const error = await res.json()
    //     alert ('Wystąpił błąd. Nie mogę usunąć użytkownika. Spróbuj ponownie później.')
    //     return;   // jak jest błąd to kończymy
    // }

    //props.onUserChange();

    return (
        <div>
            <h1>Dane klienta</h1>
            <OneUser user={user} />
            <ButtonBack action="/user"/>
        </div>
    )
}
