import React from "react";
import {RentEntity} from "../../types/rent";
import {RentTableRow} from "./RentTableRow";
import "./RentTable.css";

interface Props {
    rent: RentEntity[];
    onRentChange: () => void;
}

export const RentTable = (props: Props) => {
    return (
        <div>
            <h1 className="h1">Wypożyczone narzędzia</h1>
            <table className="rent-table">
                <thead>
                <tr>
                    <th>Nr wypożyczenia</th>
                    <th>Data wypożyczenia</th>
                    <th>Data zwrotu</th>
                    <th>Id User</th>
                    <th>Id Tool</th>
                    <th>Ilość dni (wypożyczenia)</th>
                    <th>Rozliczone</th>
                </tr>
                </thead>
                <tbody>
                {props.rent.map((rent) => (
                    <RentTableRow rent={rent} key={rent.idRent} onRentChange={props.onRentChange} />
                ))}
                </tbody>
            </table>
        </div>
    );
};
