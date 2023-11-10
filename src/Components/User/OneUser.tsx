import React, {useEffect, useState} from "react";
import {UserEntity} from "../../types/user";

interface Props {
    user: UserEntity;
}

export const OneUser = (props: Props) => {
    const [user, setUser] = useState<UserEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3007/user/user/${props.user.idUser}`);
            setUser(await res.json());
        })();
    }, [props.user.idUser]);

    console.log('- User props', props);

    if (user === null) {
        return null;
    }

    return (
        <table>
            <tbody>
            <tr>
                <td>Nazwisko</td>
                <td>{user.nameUser}</td>
            </tr>
            <tr>
                <td>Telefon</td>
                <td>{user.phoneUser}</td>
            </tr>
            <tr>
                <td>E-mail</td>
                <td>{user.emailUser}</td>
            </tr>
            <tr>
                <td>Uwagi</td>
                <td>{user.noteUser}</td>
            </tr>
            <tr>
                <td>Id klienta</td>
                <td>{user.idUser}</td>
            </tr>
            </tbody>
        </table>
    );
};