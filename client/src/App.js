import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import Shop from "./pages/shop/Shop";

function App() {
  
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={ <Shop /> } />
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
    </div>
  );
}

export default App;
