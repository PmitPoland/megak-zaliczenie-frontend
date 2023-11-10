import React from "react";
import {ToolEntity} from "./tool";
import {ToolTableRow} from "./ToolTableRow";
import "./ToolTable.css";

interface Props {
    tool: ToolEntity[];
    onToolChange: () => void;
}

export const ToolTable = (props : Props) => {
    return (
        <div>
            <h1 className="h1">Lista narzędzi</h1>
            <table className="tool-table">
            <thead>
                <tr>
                    <th>Narzędzie</th>
                    <th>Kaucja</th>
                    <th>Licznik wypożyczeń</th>
                    <th>Dostępność</th>
                    <th>ID narzędzia</th>
                    <th>Usuń narzędzie</th>
                </tr>
            </thead>
            <tbody>
            {props.tool.map((tool) => (
                <ToolTableRow tool={tool} key={tool.idTool} onToolChange={props.onToolChange} />
            ))}
            </tbody>
        </table>
    </div>
    )
}