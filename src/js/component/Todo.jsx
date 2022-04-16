import React, { useState } from "react";

const Todo = () => {
	const [thingstodo, setThingstodo] = useState("");
	const [listofthings, setListofthings] = useState([]);

	return (
		<div className="mb-3 container">
			<input
				value={thingstodo}
				onChange={(e) => {
					setThingstodo(e.target.value);
				}}
				onKeyDown={() => {
					if (e.key === "Enter") {
						setListofthings([
							...listofthings,
							{ todo: listofthings },
						]);
						setThingstodo(() => {
							return " ";
						});
					}
				}}
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="Write your shit to do buddy"
			/>
			<button
				type="button"
				className="btn btn-primary"
				onKeyDown={() => {}}
				onClick={() => {
					setListofthings([...listofthings, { todo: listofthings }]);
					setThingstodo(() => {
						return " ";
					});
				}}>
				Don't be lazy my friend :)
			</button>
		</div>
	);
};

export default Todo;
