import React, {useEffect, useState} from "react";
import {UserEntity} from "../../types/user";
import {UserTable} from "./UserTable";
import {Spinner} from "../Spinner/Spinner";

export const Userslist = () => {
    const [userList, setUserList] = useState<UserEntity[] | null >(null);

    const refreshUserList = (async () => {
        setUserList(null);  // linijka potrzebna aby zanim pobierze/odświerzy tabelę był napis wczytywanie.
        const res = await fetch('http://localhost:3007/user/list');
        const data = await res.json();
        // console.log('- DATA - rozkodowany JSON', data);
        // console.log();
        setUserList(data);
    });


    useEffect( () => {
        refreshUserList();
    },[]);

    if (userList === null) {
        return  <Spinner/>   // <p>pobieram listę...</p>
    }

     return <>

        <UserTable user={userList} onUserChange={refreshUserList}/>
    </>
}