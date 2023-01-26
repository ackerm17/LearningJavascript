import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import Update from './view/Update';
import New from './view/New';
function App() {
    return (
    <div className="App">
          <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<New/>} path="/api/authors" />
            <Route element={<Update/>} path="/api/updateauthor/:id"/>
          </Routes>
    </div>
    );
}
export default App;
