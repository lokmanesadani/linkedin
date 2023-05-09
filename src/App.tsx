import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import SideNav from "./components/sidenav/sidenav";
import Backdrop from "./components/backdrop/backdrop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <SideNav />
        <Backdrop />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
