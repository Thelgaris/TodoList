import propTypes from "prop-types";
import React, { useState } from "react";

const Todo = (props) => {
	const [thingstodo, setThingstodo] = useState("");
	const [listofthings, setListofthings] = useState([]);
	const [counter, setCounter] = useState("");

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
						if (e.listofthings != e.target.value) {
							setListofthings([...listofthings, { thingstodo }]);

							setThingstodo(() => {
								return "";
							});
						}
					}
				}}
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="Write your shit to do buddy"
			/>
			<button
				value={thingstodo}
				type="button"
				className="btn btn-primary"
				onClick={(e) => {
					if (e.target.value.trim() != "") {
						setListofthings([...listofthings, { thingstodo }]);
						setThingstodo(() => {
							return "";
						});
					}
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
			{setCounter(() => {
				return listofthings.length;
			})}
			<div className="card">
				<div className="card-body">{counter}</div>
			</div>
			;
		</div>
	);
};

Todo.propTypes = {
	test: propTypes.string,
};
export default Todo;
