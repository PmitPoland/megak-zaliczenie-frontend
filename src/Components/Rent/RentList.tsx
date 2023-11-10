import React, {useEffect, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {RentEntity} from "../../types/rent";
import {RentTable} from "./RentTable";

export const Rentlist = () => {
    const [rentList, setRentList] = useState<RentEntity[] | null >(null);

    const refreshRentList = (async () => {
        setRentList(null);
        const res = await fetch('http://localhost:3007/rent/rentlist');
        const data = await res.json();
        setRentList(data);
    });


    useEffect( () => {
        refreshRentList();
    },[]);

    if (rentList === null) {
        return  <Spinner/>   // <p>pobieram listę...</p>
    }

    return <>
        <RentTable rent={rentList} onRentChange={refreshRentList}/>
    </>
}