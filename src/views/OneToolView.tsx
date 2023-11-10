import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ButtonBack} from "../Components/Buttons/ButtonBack";
import {ToolEntity} from "../Components/Tool/tool";
import {OneTool} from "../Components/Tool/OneTool";

export const OneToolView = () => {
    const [tool, setTool] = useState<ToolEntity | null>(null);
    const {idTool} = useParams();

    useEffect( ()=> {
        (async ()=> {
            const res = await fetch(`http://localhost:3007/tool/id/${idTool}`);
            setTool(await res.json());
        })();
    },[]);

    if (tool === null) {
        return null;
    }

    return (
        <div>
            <h1>Narzędzie</h1>
            <OneTool tool={tool} />
            <ButtonBack action="/tool"/>
        </div>
    )
}
