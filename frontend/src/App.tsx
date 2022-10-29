import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import { LoadContextProvider} from "./context/LoaderContext";
import Router from "./shared/Router";

function App() {
  return (
    <LoadContextProvider>
      <div className="App">
        <Header />
        <Loader/>
        <Router />
        <Footer />
      </div>
    </LoadContextProvider>
  );
}

export default App;
