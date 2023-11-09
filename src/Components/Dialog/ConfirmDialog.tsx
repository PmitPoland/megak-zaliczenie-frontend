import React from "react";
import {Dialog} from "./Dialog";

interface Props {
    title?: string;
    children: React.ReactNode;
}

export const ConfirmDialog = (props: Props) => (
    <Dialog title={props.title}>
        {props.children}
        <hr/>
        <button className="Button">Tak</button> <button className="Button">Nie</button>
    </Dialog>
);
