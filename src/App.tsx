import React from 'react';
import './App.css';

import {Link, Route, Routes} from "react-router-dom";
import {ToolsView} from "./views/ToolsView";
import {UsersView} from "./views/UsersView";
import {Header} from "./views/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {OneUserView} from "./views/OneUserView";

export const App = () =>  {
  return (
      <>
         <Header/>
         <Routes>
             <Route path="/tools" element={<ToolsView/>} />
             <Route path="/user/:idUser" element={<OneUserView/>} />
             <Route path="/user" element={<UsersView/>} />
             <Route path="*" element={<NotFoundView/>} />
         </Routes>
      </>

  );
}
