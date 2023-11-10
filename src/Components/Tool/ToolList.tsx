import React, {useEffect, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {ToolEntity} from "./tool";
import {ToolTable} from "./ToolTable";

export const ToolList = () => {
    const [toolList, setToolList] = useState<ToolEntity[] | null >(null);

    const refreshToolList = (async () => {
        setToolList(null);
        const res = await fetch('http://localhost:3007/tool/list');
        const data = await res.json();
        setToolList(data);
    });

    useEffect( () => {
        refreshToolList();
    },[]);

    if (toolList === null) {
        return  <Spinner/>
    }
    return <>
        <ToolTable tool={toolList} onToolChange={refreshToolList}/>
    </>
}