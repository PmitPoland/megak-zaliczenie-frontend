import React, {MouseEvent} from "react";
import {Link} from "react-router-dom";
import {ToolEntity} from "./tool";

interface Props {
    tool: ToolEntity;
    onToolChange: () => void;     // ta funkcja daje nam możliwość poinformowania rodzica, że coś się zmieniło. Pozwoli nam to odświerzyć tabelę np. po usunięciu rekordu
}

export const ToolTableRow = (props: Props) => {

    const deleteTool = async (e: MouseEvent) => {  // obsługa kliknięcia myszą na ikonce KOOSZA, aby strona nie skakała do góry !
        e.preventDefault();

        if (!window.confirm(`Usunąć narzędzie  ${props.tool.idTool}?`)) {
            return;
        }

        // jeśli usunąć to :
        const res = await fetch(`http://localhost:3007/tool/delete/${props.tool.idTool}`, {
            method: 'DELETE',               // zmieniamy z domyślnej metody GET na DELETE - tam na BE mamy usuwanie użytkownika.
        });

        if (res.status === 500 || res.status === 400) {
            const error = await res.json()
            alert ('Wystąpił błąd. Nie mogę usunąć narzędzia. Spróbuj ponownie później.')
            return;   // jak jest błąd to kończymy
        }

        props.onToolChange();
    };

    return (
        <tr>
            <th>
                <Link to={`/tool/${props.tool.idTool}`}>
                {props.tool.nameTool} </Link>
            </th>
            <td>{props.tool.depositTool}</td>
            <td>{props.tool.toolCounterRent}</td>
            {/*<td>{props.tool.availabilityTool}</td>*/}
            <td>{props.tool.availabilityTool ? "TAK" : "NIE"}</td>
            <td>{props.tool.idTool}</td>
            <td>
                <button onClick={deleteTool}>Usuń</button>

            </td>
        </tr>
    );
}

