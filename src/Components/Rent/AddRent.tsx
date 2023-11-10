import React, {FormEvent, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import "./AddRent.css";
import {AddNewRent, RentEntity} from "../../types/rent";
import {useParams} from "react-router-dom";



export const AddRent = () => {
    const {idUser} = useParams();

    const [form, setForm] = useState<AddNewRent>({
        idUser: idUser || "",
        idTool: "",
        iloscDni: 1
    })

    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm( form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch('http://localhost:3007/rent/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data: RentEntity = await res.json();
            setLoading(false);
            setResultInfo(`Nowe wypożyczenie zostało dodane.`)
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return  <Spinner/>   // <p>Wczytuję dane...</p>
    }

    if (resultInfo !== null) {
        return  <div>
            <p>{resultInfo}</p>
            <button onClick={() => setResultInfo(null)}>Wypożycz kolejne narzędzie</button>
        </div>
    }

    return (
        <form onSubmit={sendForm} className="add-rent-form">
            <h2>Wypożycz</h2>
            <p>
                <label>
                    Id Klienta: <br />
                    <input
                        type="string"
                        value={form.idUser}
                        onChange={(e) => updateForm("idUser", e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Id narzędzia:<br />
                    <input
                        type="string"
                        value={form.idTool}
                        onChange={(e) => updateForm("idTool", e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Na ile dni:<br />
                    <input
                        type="number"
                        value={form.iloscDni}
                        onChange={(e) => updateForm("iloscDni", e.target.value)}
                    />
                </label>
            </p>
            <button type="submit">Dodaj</button>
        </form>
    )

}