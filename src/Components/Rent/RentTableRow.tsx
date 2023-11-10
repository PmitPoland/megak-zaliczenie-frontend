import React from "react";
import {Link} from "react-router-dom";
import {RentEntity} from "../../types/rent";


interface Props {
    rent: RentEntity;
    onRentChange: () => void;
}

const formatDate = (dateString: Date) => {
    const formattedDate = new Date(dateString).toLocaleDateString('pl-PL');
    return formattedDate;
};

export const RentTableRow = (props: Props) => {
    const billingRent = async () => {
        alert('Rozliczenie wypożyczenia- funkcja w przygotowaniu');
        return;
    };


    return (
        <tr>
            <th>
                <Link to={`/rent/${props.rent.idRent}`}>
                    {props.rent.idRent} </Link>
            </th>
            <td>{formatDate(props.rent.dataWypozyczenia)}</td>
            <td>{props.rent.dataZwrotu ? formatDate(props.rent.dataZwrotu) : "--:--:----"}</td>
            <td>{props.rent.idUser}</td>
            <td>{props.rent.idTool}</td>
            <td>{props.rent.iloscDni}</td>
            <td>{!props.rent.rentalActive? "TAK" : <button onClick={billingRent}>Rozlicz</button> }</td>
        </tr>
    );
};
