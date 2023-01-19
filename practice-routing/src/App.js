import React from "react";
import {
  Routes,
  Route,
  Link, 
  useParams
} from "react-router-dom";

const Number = (props) => {
  const {number} = useParams();
  if(!isNaN(number)){
    return (
      <div>
      <h1>The Number is {number}</h1>
    </div>
  );
}else{
  return (
    <div>
      <h1>The Word is {number}</h1>
    </div>
  );
}
}

const Home = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

const FancyWord = (props) => {
  const {word} = useParams();
  const {color} = useParams();
  const {bg} = useParams();
  return (
    <div style={{backgroundColor: bg}}>
      <h1 style={{color: color}}>The Word is {word}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/:number" element={<Number />} />
        <Route path="/" element={<Home />} />
        <Route path="/:word/:color/:bg" element={<FancyWord />} />
      </Routes>
    </div>
  );
}

export default App;
