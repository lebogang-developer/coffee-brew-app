import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditBrew from "./pages/editBrew";
import CreateBrew from "./pages/CreateBrew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBrew />} />
        <Route path="/edit/:id" element={<EditBrew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
