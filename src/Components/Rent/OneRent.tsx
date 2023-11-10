import React, {useEffect, useState} from "react";
import {RentEntity} from "../../types/rent";

interface Props {
    rent: RentEntity;
}

const formatDate = (dateString: Date) => {
    const formattedDate = new Date(dateString).toLocaleDateString('pl-PL');
    return formattedDate;
};

export const OneRent = (props: Props) => {
    const [rent, setRent] = useState<RentEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3007/rent/rent/${props.rent.idRent}`);
            setRent(await res.json());
        })();
    }, [props.rent.idRent]);

    if (rent === null) {
        return null;
    }

    return (
        <table>
            <tbody>
            <tr>
                <td>Nr wypożyczenia</td>
                <td>{rent.idRent}</td>
            </tr>
            <tr>
                <td>Data wypożyczenia</td>
                <td>{formatDate(props.rent.dataWypozyczenia)}</td>
            </tr>
            <tr>
                <td>Nazwa klienta</td>
                <td>{rent.idUser}</td>
            </tr>
            <tr>
                <td>Narzędzie</td>
                <td>{rent.idTool}</td>
            </tr>
            <tr>
                <td>Ilość dni</td>
                <td>{rent.iloscDni}</td>
            </tr>
            <tr>
                <td>Rozliczone</td>
                <td>{rent.rentalActive}</td>
            </tr>
            </tbody>
        </table>
    );
};