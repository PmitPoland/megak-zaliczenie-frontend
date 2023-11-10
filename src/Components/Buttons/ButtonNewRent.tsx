import React from "react";
import {Link} from "react-router-dom";

interface Props{
    action: string;
}

export const ButtonNewRent = (props: Props) => (
    <>
        <p>
            <Link to={props.action}>Nowe wypożyczenie</Link>
        </p>
    </>
)