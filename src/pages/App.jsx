import LatarBelakang from "../components/LatarBelakang.jsx";
import Tujuan from "../components/Tujuan.jsx";
import BentukKegiatan from "../components/BentukKegiatan.jsx";
import BentukKegiatanLG from "../components/BentukKegiatanLG.jsx";
import Footer from "../components/Footer.jsx";
import Timeline from "../components/Timeline.jsx";
import Jumbotron from "../components/Jumbotron.jsx";

import { useWindowDimensions } from "../Utils.jsx";

import "../App.css";
import Navbar from "../components/Navbar.jsx";
import Wave from "../components/wave.jsx";

function App() {
	const { height, width } = useWindowDimensions();
	return (
		<main className="">
			<Navbar />
			<Jumbotron />
			<LatarBelakang />
			<Tujuan />
			<Timeline />
			{width > 768 ? <BentukKegiatanLG /> : <BentukKegiatan />}
			<Wave />
		</main>
	);
}

export default App;
