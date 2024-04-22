import LatarBelakang from "../components/LatarBelakang.jsx";
import Tujuan from "../components/Tujuan.jsx";
import BentukKegiatan from "../components/BentukKegiatan.jsx";

import "../App.css";
import Navbar from "../components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <LatarBelakang />
        <Tujuan />
        <BentukKegiatan />
      </div>
    </>
  );
}

export default App;
