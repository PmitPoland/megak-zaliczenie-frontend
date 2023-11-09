import React from "react";
import {ToolList} from "../Components/Tool/ToolList";
import {ButtonNewTool} from "../Components/Buttons/ButtonNewTool";

export const ToolsView = () => (
    <>
        <ToolList/>
        <ButtonNewTool action="/tool/add"/>
    </>
)

