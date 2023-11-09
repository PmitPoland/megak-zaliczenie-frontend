import React, {useEffect, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {ToolEntity} from "./tool";
import {ToolTable} from "./ToolTable";

export const ToolList = () => {
    const [toolList, setToolList] = useState<ToolEntity[] | null >(null);

    const refreshToolList = (async () => {
        setToolList(null);  // linijka potrzebna aby zanim pobierze/odświerzy tabelę był napis wczytywanie.
        const res = await fetch('http://localhost:3007/tool/list');
        const data = await res.json();
        console.log('- DATA - rozkodowany JSON', data);
        console.log();
        setToolList(data);
    });

    useEffect( () => {
        refreshToolList();
    },[]);

    if (toolList === null) {
        return  <Spinner/>   // <p>pobieram listę...</p>
    }
    console.log('---- toolList', toolList);
    return <>
        <ToolTable tool={toolList} onToolChange={refreshToolList}/>
    </>
}