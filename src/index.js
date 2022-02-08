import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Categories from "./Components/Categories";
import Makers from "./Components/Makers";


ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<App />}>
          <Route path={'/categories'} element={<Categories />}/>
          <Route path={'/makers'} element={<Makers />}/>
          </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


