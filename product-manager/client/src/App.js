import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import Detail from './view/Detail';
import Update from './view/Update';
function App() {
    return (
    <div className="App">
          <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Detail/>} path="/api/products/:id" />
            <Route element={<Update/>} path="/api/productupdate/:id"/>
          </Routes>
    </div>
    );
}
export default App;
