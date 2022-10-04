
import { Routes, Route } from "react-router-dom";
import Principal from "../components/Principal";
import RegistView from "../components/registro/regisView";
import Checkview from "../components/checkView/checkView";
import CategTotal from "../components/categorias/CategTotal";
import OptionsUsers from "../components/optionsView";
import Categorias from "../components/categorias/Categorias";
import VoluntarioView from "../components/voluntarios/voluntarioView"
import Chatview from "../components/Chatview";
import Landing from "../components/landingPage/Landing";

function Main(props) {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/inicio" element={<Principal />} />
      <Route path="/login" element={<Principal />} />
      <Route path="/Regist" element={<RegistView />} />
      <Route path="checkView/:usuario" element={<Checkview />} />
      <Route path="/categories/:usuario" element={<CategTotal />} />
      <Route path="/categories2/:todo/:usuario" element={<Categorias />} />
      <Route path="/voluntarioView/:voluntario/:usuario" element={<VoluntarioView/>} />
 <Route path="/chatView/:usuario" element={<Chatview />} /> 
      <Route path="/Options/:usuario" element={<OptionsUsers />} />
    

      </Routes>
    </div>
  );
}

export default Main;
