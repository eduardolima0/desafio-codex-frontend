import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import React from 'react'
const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
