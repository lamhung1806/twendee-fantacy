import Header from "components/Header";
import Router from "components/Router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
