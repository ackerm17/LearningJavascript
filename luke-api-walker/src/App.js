import React from "react";
import { useState } from "react";
import {
  Routes,
  Route,
  Link, 
  useParams
} from "react-router-dom";

import Api from "./components/Api";
import Form from "./components/Form";



function App() {
  const [category, setCategory] = useState("people");
  const [id, setId] = useState(1);
  return (
    <>
    <Form category={category} setCategory={setCategory} id={id} setId={setId} />
    <Routes>
        <Route path="/:category/:num" element={<Api id={id} setId={setId}/>} />
    </Routes>
    </>
  );
}

export default App;
