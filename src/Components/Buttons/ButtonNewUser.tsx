import React from "react";
import {Link} from "react-router-dom";

interface Props{
    action: string;
}

export const ButtonNewUser = (props: Props) => (
    <>
        <p>
            <Link to={props.action}>Dodaj nowego klienta</Link>
        </p>
    </>
)