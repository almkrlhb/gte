// src/App.tsx
import cloudflareLogo from "./assets/backlolo.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={backloloLogo} className="logo" alt="backlolo logo" />
			</div>
			<h1>Welcome to GeoTech Explorer | Dr. Alam's  website.</h1>
			<div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
					aria-label="increment"
				>
					count is {count}
				</button>
				<p>
					The Website is under Construction.
				</p>
			</div>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name of the constructor is: {name}
				</button>
				<p>
					
				</p>
			</div>
			<p className="read-the-docs">Visit the youtube link above for exploring.</p>
		</>
	);
}

export default App;
