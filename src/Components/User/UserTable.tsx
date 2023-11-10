import React from "react";
import { UserEntity } from "../../types/user";
import { UserTableRow } from "./UserTableRow";
import "./UserTable.css";

interface Props {
    user: UserEntity[];
    onUserChange: () => void;
}

export const UserTable = (props: Props) => {
    return (
        <div>
        <h1 className="h1">Lista klientów</h1>
        <table className="user-table">
            <thead>
            <tr>
                <th>Nazwisko</th>
                <th>Telefon</th>
                <th>Email</th>
                <th>Notatka</th>
                <th>Wypożycz narzędzie</th>
                <th>Usuń klienta</th>
            </tr>
            </thead>
            <tbody>
            {props.user.map((user) => (
                <UserTableRow
                    user={user}
                    key={user.idUser}
                    onUserChange={props.onUserChange} />
            ))}
            </tbody>
        </table>
        </div>
    );
};
