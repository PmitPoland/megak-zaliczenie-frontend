import React from "react";
import {Dialog} from "./Dialog";
import {ConfirmDialog} from "./ConfirmDialog";

export const DialogApp = props => {

    return <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum laudantium quae ratione
            reprehenderit. Atque beatae, debitis dolores eius exercitationem illum iure natus neque odio, quia saepe sequi
            tenetur voluptatibus?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at ex iste mollitia nam neque, nesciunt
            tenetur? Adipisci animi consequuntur expedita facilis id laboriosam, magni maxime necessitatibus nobis
            quidem sapiente!</p>

        <Dialog title="Wypożyczalnia">
            Witam serdecznie na stronie głównej Wypożyczalni
        </Dialog>

        <p>A accusamus atque aut cupiditate deserunt eaque est et, hic illo laboriosam nam
            neque nesciunt nulla quia quidem quis recusandae repellat repudiandae sunt tempore unde vitae voluptatum.
            Autem, nesciunt, tenetur.</p>
        <Dialog >
            <h1>Wypożyczalnia</h1>
            <p>Lista użytkowników</p>
            <p>Lista rzeczy</p>

        </Dialog>
        <ConfirmDialog title="Potwierdź wybór">
            <p>Jesteś pewien?</p>
            Może być zwykły tekst.
        </ConfirmDialog>
        <p>Atque, corporis cupiditate eius enim iure molestias nihil non odio porro
            quaerat quasi quis repellendus sit suscipit tempore unde, voluptas. Aliquid aspernatur blanditiis dignissimos
            error laudantium, minima quis rerum suscipit!</p>
    </>
}