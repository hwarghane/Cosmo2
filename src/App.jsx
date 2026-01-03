import React from "react";
import "./App.css";
import Login from "./components/Login";

export default function App() {
	function handleLogin(data) {
		// Replace this with real auth logic
		alert(`Logged in: ${data.email}`);
		console.log("login data:", data);
	}

	return (
		<div className="App">
			<Login onSubmit={handleLogin} />
		</div>
	);
}
