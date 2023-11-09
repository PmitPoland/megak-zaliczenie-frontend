import React, {MouseEvent} from "react";
import {UserEntity} from "../../types/user";

interface Props {
    user: UserEntity;
    onUserChange: () => void;     // ta funkcja daje nam możliwość poinformowania rodzica, że coś się zmieniło. Pozwoli nam to odświerzyć tabelę np. po usunięciu rekordu
}

export const UserTableRow = (props: Props) => {

    const deleteUser = async (e: MouseEvent) => {  // obsługa kliknięcia myszą na ikonce KOOSZA, aby strona nie skakała do góry !
        e.preventDefault();

        if (!window.confirm(`Usunąć użytkownika ${props.user.idUser}?`)) {
            return;
        }

        // jeśli usunąć to :
        const res = await fetch(`http://localhost:3007/user/delete/${props.user.idUser}`, {
            method: 'DELETE',               // zmieniamy z domyślnej metody GET na DELETE - tam na BE mamy usuwanie użytkownika.
        });

        if (res.status === 500 || res.status === 400) {
            const error = await res.json()
            alert ('Wystąpił błąd. Nie mogę usunąć użytkownika. Spróbuj ponownie później.')
            return;   // jak jest błąd to kończymy
        }

        props.onUserChange();

    };

    return (
        <tr>
            <th>{props.user.idUser}</th>
            <td>{props.user.nameUser}</td>
            <td>{props.user.phoneUser}</td>
            <td>{props.user.emailUser}</td>
            <td>{props.user.noteUser}</td>
            <td>
                <a href="#" onClick={deleteUser}>🗑️</a>
            </td>
        </tr>
    );
}

