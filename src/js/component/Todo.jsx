import propTypes from "prop-types";
import React, { useState } from "react";

const Todo = (props) => {
	const [thingstodo, setThingstodo] = useState("");
	const [listofthings, setListofthings] = useState([]);
	const [counter, setCounter] = useState("0");

	return (
		<div className="mb-3 container">
			<input
				value={thingstodo}
				onChange={(e) => {
					setThingstodo(e.target.value);
				}}
				onKeyDown={(e) => {
					console.log(e.key);
					if (e.key == "Enter" && e.target.value.trim() != "") {
						setListofthings([...listofthings, { thingstodo }]);

						setThingstodo(() => {
							return "";
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
				onClick={() => {
					setListofthings([...listofthings, { thingstodo }]);
					setThingstodo(() => {
						return "";
					});
				}}>
				Don't be lazy my friend :)
			</button>

			{listofthings.map((my, index) => {
				return (
					<div className="card" key={index}>
						<div className="card-body">{my.thingstodo}</div>
					</div>
				);
			})}
		</div>
	);
};

Todo.propTypes = {
	test: propTypes.string,
};
export default Todo;
