import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { getCountry } from "./redux/features/country/countrySlice";

function App() {
	// const counter = useSelector((state) => state.counter.counter);
	const dispatch = useDispatch();

	const { counter } = useSelector((state) => state.counter);
	const { country } = useSelector((state) => state.country);

	console.log(country);

	useEffect(() => {
		dispatch(getCountry());
	}, []);
    

	return (
		<div className="App">
			<button onClick={() => dispatch(decrement())}>decrement</button>
			<div>{counter}</div>
			<button onClick={() => dispatch(increment())}>increment</button>
		</div>
	);
}

export default App;
