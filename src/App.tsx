import React from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import {ToolsView} from "./views/ToolsView";
import {UsersView} from "./views/UsersView";
import {Header} from "./views/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {OneUserView} from "./views/OneUserView";
import {OneToolView} from "./views/OneToolView";
import {AddUserBox} from "./Components/User/AddUserBox";
import {AddToolBox} from "./Components/Tool/AddToolBox";
import {RentsView} from "./views/RentsView";
import {OneRentView} from "./views/OneRentView";
import {AddRentBox} from "./Components/Rent/AddToolBox";

export const App = () =>  {
  return (
      <>
         <Header/>
         <Routes>
             <Route path="/" element={<RentsView/>} />
             <Route path="/tool/add" element={<AddToolBox/>} />
             <Route path="/tool" element={<ToolsView/>} />
             <Route path="/tool/:idTool" element={<OneToolView/>} />
             <Route path="/user/add" element={<AddUserBox/>} />
             <Route path="/user/:idUser" element={<OneUserView/>} />
             <Route path="/user" element={<UsersView/>} />

             <Route path="/rent/add" element={<AddRentBox/>} />
             <Route path="/rent/add/:idUser" element={<AddRentBox/>} />
             <Route path="/rent/:idRent" element={<OneRentView/>} />
             <Route path="/rent" element={<RentsView/>} />
             <Route path="*" element={<NotFoundView/>} />
         </Routes>
      </>

  );
}
