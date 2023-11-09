import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ButtonBack} from "../Components/Buttons/ButtonBack";
import {ToolEntity} from "../Components/Tool/tool";
import {OneTool} from "../Components/Tool/OneTool";

export const OneToolView = () => {
    const [tool, setTool] = useState<ToolEntity | null>(null);
    const {idTool} = useParams();  // Destrukturyzacja z params

    useEffect( ()=> {           // aby można było odczytać zapytanie z backendu
        (async ()=> {
            const res = await fetch(`http://localhost:3007/tool/id/${idTool}`);
            setTool(await res.json());
        })();
    },[]);

    //console.log('ID Tool', tool.idTool);

    if (tool === null) {
        return null;
    }

   // const {idUser} = useParams();  // Destrukturyzacja z params
   console.log('ID Tool', tool.idTool);

    // if (res.status === 500 || res.status === 400) {
    //     const error = await res.json()
    //     alert ('Wystąpił błąd. Nie mogę usunąć użytkownika. Spróbuj ponownie później.')
    //     return;   // jak jest błąd to kończymy
    // }

    //props.onUserChange();

    return (
        <div>
            <h1>Narzędzie</h1>
            <OneTool tool={tool} />
            <ButtonBack action="/tool"/>
        </div>
    )
}
