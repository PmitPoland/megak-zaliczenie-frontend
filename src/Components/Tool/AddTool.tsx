import React, {FormEvent, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {AddNewTool, ToolEntity} from "./tool";
import "./AddTool.css";
export const AddTool = () => {
    const [form, setForm] = useState<AddNewTool>({
        nameTool: '',
        depositTool: 0,
    }) // useState, stan wewnętrzny dla wielu pól

    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {  // do aktualizacji Inputa.
        setForm( form => ({
            ...form,  // pobierz to co poprzednio i zmień tylko to co jest w kluczu key na wartość z value
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch('http://localhost:3007/tool/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data: ToolEntity = await res.json();
            console.log('*-*- Data z ToolUser', data);
            setLoading(false);
            setResultInfo(`Nowe urządzenie  ${data.nameTool} zostało dodane pod ID nr ${data.idTool}.`)
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
            <button onClick={() => setResultInfo(null)}>Dodaj kolejne urządzenie</button>
        </div>

    }

    return (
        <form onSubmit={sendForm} className="add-tool-form">
            <h2>Dodaj narzędzie</h2>
            <p>
                <label>
                    Narzędzie: <br />
                    <input
                        type="text"
                        value={form.nameTool}
                        onChange={(e) => updateForm("nameTool", e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Kaucja:<br />
                    <input
                        type="number"
                        value={form.depositTool}
                        onChange={(e) => updateForm("depositTool", e.target.value)}
                    />
                </label>
            </p>

            <button type="submit">Dodaj</button>
        </form>
    )

}