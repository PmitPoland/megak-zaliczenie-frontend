import React, {useEffect, useState} from "react";
import {ToolEntity} from "./tool";


interface Props {
    tool: ToolEntity;
}

export const OneTool = (props: Props) => {
    const [tool, setTool] = useState<ToolEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3007/tool/id/${props.tool.idTool}`);
            setTool(await res.json());
        })();
    }, [props.tool.idTool]);

    if (tool === null) {
        return null;
    }

    return (
        <table>
            <tbody>
            <tr>
                <td>Narzędzie</td>
                <td>{tool.nameTool}</td>
            </tr>
            <tr>
                <td>Kaucja</td>
                <td>{tool.depositTool}</td>
            </tr>
            <tr>
                <td>Ilość wypożyczeń</td>
                <td>{tool.toolCounterRent}</td>
            </tr>
            <tr>
                <td>Dostępność</td>
                <td>{tool.availabilityTool}</td>
            </tr>
            <tr>
                <td>Id narzędzia</td>
                <td>{tool.idTool}</td>
            </tr>
            </tbody>
        </table>
    );
};