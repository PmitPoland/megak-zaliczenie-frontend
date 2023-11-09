import React from "react";
import {Link} from "react-router-dom";

interface Props{
    action: string;
}

export const ButtonBack = (props: Props) => (
    <>
        <p>
            <Link to={props.action}>Powrót</Link>
        </p>
    </>
)