import React from 'react';
import './App.css';

import {Link, Route, Routes} from "react-router-dom";
import {ToolsView} from "./views/ToolsView";
import {UsersView} from "./views/UsersView";
import {Header} from "./views/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {OneUserView} from "./views/OneUserView";
import {OneToolView} from "./views/OneToolView";
import {AddUserBox} from "./Components/User/AddUserBox";
import {AddToolBox} from "./Components/Tool/AddToolBox";

export const App = () =>  {
  return (
      <>
         <Header/>
         <Routes>
             <Route path="/tool/add" element={<AddToolBox/>} />
             <Route path="/tool" element={<ToolsView/>} />
             <Route path="/tool/:idTool" element={<OneToolView/>} />
             <Route path="/user/add" element={<AddUserBox/>} />
             <Route path="/user/:idUser" element={<OneUserView/>} />
             <Route path="/user" element={<UsersView/>} />
             <Route path="/rent" element={<p>Wypożycz</p>} />
             <Route path="*" element={<NotFoundView/>} />
         </Routes>
      </>

  );
}
