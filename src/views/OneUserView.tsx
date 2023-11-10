import React, {useEffect, useState} from "react";
import {OneUser} from "../Components/User/OneUser";
import {useParams} from "react-router-dom";
import {UserEntity} from "../types/user";
import {ButtonBack} from "../Components/Buttons/ButtonBack";

export const OneUserView = () => {
    const [user, setUser] = useState<UserEntity | null>(null);
    const {idUser} = useParams();

    useEffect( ()=> {
        (async ()=> {
            const res = await fetch(`http://localhost:3007/user/user/${idUser}`);
            setUser(await res.json());
        })();
    },[]);



    if (user === null) {
        return null;
    }

    return (
        <div>
            <h1>Dane klienta</h1>
            <OneUser user={user} />
            <ButtonBack action="/user"/>
        </div>
    )
}
