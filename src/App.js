import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoute.map((route, index) => (
          <Route key={index} path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
