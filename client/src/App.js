import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import Shop from "./pages/shop/Shop";
import LoadingBar from 'react-top-loading-bar'
import { useDispatch, useSelector } from "react-redux";
import { loadingEnd } from "./redux/loading-bar/action";

function App() {

  const { progress } = useSelector(state => state)

  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <Header />
      <LoadingBar
        color='#f11946'
        height='3px'
        progress={progress}
        onLoaderFinished={() => dispatch(loadingEnd())}
      />
        <Routes>
          <Route path="/" element={ <Shop /> } />
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
    </div>
  );
}

export default App;
