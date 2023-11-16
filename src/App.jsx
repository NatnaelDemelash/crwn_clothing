import { Routes, Route } from "react-router-dom";

import NavBar from "./routes/navigation/NavBar";
import Categories from "./components/categories/Categories";
import Authentication from "./routes/authentication/Authentication";

const Shop = () => {
  return <h1>Shop Gort</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
