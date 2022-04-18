import propTypes from "prop-types";
import React, { useState, useEffect } from "react";

const Todo = (props) => {
	const [thingstodo, setThingstodo] = useState("");
	const [listofthings, setListofthings] = useState([]);

	useEffect(() => {
		getTodoList();
	}, []);

	useEffect(() => {
		updateTodoList();
	}, [listofthings]);

	const getTodoList = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/Ale",
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		setListofthings(data);
	};
	const updateTodoList = async () => {
		await fetch("https://assets.breatheco.de/apis/fake/todos/user/Ale", {
			method: "PUT",
			body: JSON.stringify(listofthings),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setListofthings(data);
	};

	return (
		<div className="mb-3 container-fluid row">
			<div className="">
				<input
					value={thingstodo}
					onChange={(e) => {
						setThingstodo(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key == "Enter" && e.target.value.trim() != "") {
							if (e.target.value.trim != listofthings) {
								setListofthings([
									...listofthings,
									{ label: thingstodo, done: false },
								]);

								setThingstodo(() => {
									return "";
								});
							} else alert("You cannot do that");
						}
					}}
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="Write your shit to do buddy"
				/>
			</div>
			<div className="">
				<button
					type="button"
					className="btn btn-primary"
					onClick={(e) => {
						if (thingstodo != "") {
							setListofthings([
								...listofthings,
								{ label: thingstodo, done: false },
							]);
							setThingstodo(() => {
								return "";
							});
						}
					}}>
					Don't be lazy my friend :)
				</button>
			</div>

			{listofthings.map((my, index) => {
				return (
					<div className="card row" key={index}>
						<div className="card-body d-flex">
							<div className="col-10">{my.label}</div>
							<button type="button" className="btn btn-light">
								X
							</button>
						</div>
					</div>
				);
			})}
			<div>{listofthings.length} tareas por hacer</div>
		</div>
	);
};

Todo.propTypes = {
	test: propTypes.string,
};
export default Todo;
