import React, {FormEvent, useState} from "react";
import {AddNewUser, UserEntity} from "../../types/user";
import {Spinner} from "../Spinner/Spinner";

export const AddUser = () => {
    const [form, setForm] = useState<AddNewUser>({
        nameUser: '',
        emailUser: '',
        phoneUser: '',
        noteUser: '',
        userCounterOfRent: 0,
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
            const res = await fetch('http://localhost:3007/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data: UserEntity = await res.json();
            console.log('*/*/*/* Data z AddUser', data);
            setLoading(false);
            setResultInfo(`Nowy użytkownik o nazwisku ${data.nameUser} został dodany pod ID nr ${data.idUser} .`)
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
            <button onClick={() => setResultInfo(null)}>Dodaj kolejnego użytkownika</button>
        </div>

    }

    return <form onSubmit={sendForm}>
        <h2>Dodaj użytkownika</h2>
        <p>
            <label>
                Nazwa: <br/>
                <input
                    type="text"
                    value={form.nameUser}
                    onChange={e => updateForm('nameUser', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Email: <br/>
                <input
                    type="text"
                    value={form.emailUser}
                    onChange={e => updateForm('emailUser', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Nr telefonu: <br/>
                <input
                    type="text"
                    value={form.phoneUser}
                    onChange={e => updateForm('phoneUser', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Uwagi: <br/>
                <input
                    type="text"
                    value={form.noteUser}
                    onChange={e => updateForm('noteUser', e.target.value)}
                />
            </label>
        </p>
        <button>Dodaj</button>
    </form>

}