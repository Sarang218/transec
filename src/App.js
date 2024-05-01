// Filename - App.js

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	Stage1,
	OurAim,
	OurVision,
} from "./pages/Stage1";
import {
	Stage5,
	ServicesOne,
	ServicesTwo,
	ServicesThree,
} from "./pages/Stage5";
import {
	Stage3,
	EventsOne,
	EventsTwo,
} from "./pages/Stage3";
import Stage2 from "./pages/Stage2";
import Stage4 from "./pages/Stage4";
function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route
					path="/stage1"
					element={<Stage1 />}
				/>
				<Route
					path="/stage1/1.1stage"
					element={<OurAim />}
				/>
				<Route
					path="/stage1/1.2stage"
					element={<OurVision />}
				/>
				<Route
					path="/stage2"
					element={<Stage2 />}
				/>
				<Route
					path="/stage3"
					element={<Stage3 />}
				/>
				<Route
					path="/stage3/3.1stage"
					element={<EventsOne />}
				/>
				<Route
					path="/stage3/3.2stage"
					element={<EventsTwo />}
				/>
				<Route
					path="/stage4"
					element={<Stage4 />}
				/>
        <Route
					path="/stage5"
					element={<Stage5 />}
				/>
				<Route
					path="/stage5/5.1stage"
					element={<ServicesOne />}
				/>
				<Route
					path="/stage5/5.2stage"
					element={<ServicesTwo />}
				/>
				<Route
					path="/stage5/5.3stage"
					element={<ServicesThree />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
