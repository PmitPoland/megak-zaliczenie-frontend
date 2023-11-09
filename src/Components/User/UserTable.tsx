import React from "react";
import {UserEntity} from "../../types/user";
import {UserTableRow} from "./UserTableRow";

interface Props {
    user: UserEntity[];
    onUserChange: () => void;
}

export const UserTable = (props : Props) => {
    console.log('Props', props);
    console.log('User', props.user);
    return <table>
        <thead>
        <tr>
            <th>ID użytkownika</th>
            <th>Nazwisko</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Notatka</th>
            <th>Usuń urzytkownika</th>
        </tr>
        </thead>
        <tbody>
        {
            props.user.map(user => (
                <UserTableRow user={user} key={user.idUser} onUserChange={props.onUserChange}/>
            ))
        }
        </tbody>
    </table>
}