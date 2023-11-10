import React, {FormEvent, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {AddNewTool, ToolEntity} from "./tool";
import "./AddTool.css";

export const AddTool = () => {
    const [form, setForm] = useState<AddNewTool>({
        nameTool: '',
        depositTool: 0,
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
            const res = await fetch('http://localhost:3007/tool/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data: ToolEntity = await res.json();
            setLoading(false);
            setResultInfo(`Nowe narzędzie zostało dodane.`)
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return  <Spinner/>
    }

    if (resultInfo !== null) {
        return  <div>
            <p>{resultInfo}</p>
            <button onClick={() => setResultInfo(null)}>Dodaj kolejne narzędzie</button>
        </div>

    }

    return (
        <form onSubmit={sendForm} className="add-tool-form">
            <h2>Dodaj narzędzie</h2>
            <p>
                <label>
                    Nazwa: <br />
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