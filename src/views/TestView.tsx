import React from "react";
import {Link} from "react-router-dom";

export const TestView = () => (
    <>
        <h1>To jest test</h1>
        <Link to="/user">Przejdź do listy użytkowników.</Link>
    </>
)