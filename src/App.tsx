import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeBody from "./components/HomeBody";
import Home from "./routes/Home";
import ProfileForm from "./routes/Home/ProfileForm";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="before" element={<ProfileForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
