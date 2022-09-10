import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Auth from "./routes/Auth/Auth";

import "./styles.scss";

const Shop = () => <div>I am the Shop Page</div>;

function App() {

  const onMouseEnter = (ev) => {
    console.log("enter")
  }

  const onMouseLeave = (ev) => {
    console.log("leave")
  }

  const navProps = {
    onMouseEnter,
    onMouseLeave
  }


  return (
    <Routes>
      <Route path="/" element={<Navigation {...navProps} />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
