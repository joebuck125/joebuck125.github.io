import AppRouter from "../../resources/src/Components/App-Router";
import {BrowserRouter} from "react-router-dom";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import React from "react";

const App = () => {

  return (
    
    <div>
      <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
