import React, {MouseEvent} from "react";
import {Link} from "react-router-dom";
import {ToolEntity} from "./tool";

interface Props {
    tool: ToolEntity;
    onToolChange: () => void;
}

export const ToolTableRow = (props: Props) => {

    const deleteTool = async (e: MouseEvent) => {
        e.preventDefault();

        if (!window.confirm(`Usunąć narzędzie  ${props.tool.idTool}?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3007/tool/delete/${props.tool.idTool}`, {
            method: 'DELETE',
        });

        if (res.status === 500 || res.status === 400) {
            const error = await res.json()
            alert ('Wystąpił błąd. Nie mogę usunąć narzędzia. Spróbuj ponownie później.')
            return;
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
            <td>{props.tool.availabilityTool ? "TAK" : "NIE"}</td>
            <td>{props.tool.idTool}</td>
            <td>
                <button onClick={deleteTool}>Usuń</button>
            </td>
        </tr>
    );
}

