import React, {useEffect, useState} from "react";
import {UserEntity} from "../../types/user";
import {UserTable} from "./UserTable";
import {Spinner} from "../Spinner/Spinner";

export const Userslist = () => {
    const [userList, setUserList] = useState<UserEntity[] | null >(null);

    const refreshUserList = (async () => {
        setUserList(null);
        const res = await fetch('http://localhost:3007/user/list');
        const data = await res.json();
        setUserList(data);
    });


    useEffect( () => {
        refreshUserList();
    },[]);

    if (userList === null) {
        return  <Spinner/>
    }

     return <>

        <UserTable user={userList} onUserChange={refreshUserList}/>
    </>
}