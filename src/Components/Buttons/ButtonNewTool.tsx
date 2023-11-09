import React from "react";
import {Link} from "react-router-dom";

interface Props{
    action: string;
}

export const ButtonNewTool = (props: Props) => (
    <>
        <p>
            <Link to={props.action}>Dodaj nowe urządzenie</Link>
        </p>
    </>
)