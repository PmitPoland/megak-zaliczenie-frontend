
import React from "react";
import { UserEntity } from "../../types/user";
import {Link} from "react-router-dom";

interface Props {
    user: UserEntity;
    onUserChange: () => void;
}

export const UserTableRow = (props: Props) => {
    const deleteUser = async () => {
        const res = await fetch(`http://localhost:3007/user/delete/${props.user.idUser}`, {
            method: "DELETE",
        });

        if (res.status === 200) {
            props.onUserChange();
        }
    };

    return (
        <tr>
            <td>
                <Link to={`/user/${props.user.idUser}`}>{props.user.nameUser}</Link> {/* Dodaj Link */}
            </td>
            <td>{props.user.phoneUser}</td>
            <td>{props.user.emailUser}</td>
            <td>{props.user.noteUser}</td>
            <td>
                <button onClick={deleteUser}>Usuń</button>
            </td>
        </tr>
    );
};
