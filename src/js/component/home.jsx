import React from "react";
import Todo from "./Todo.jsx";

const Home = () => {
	return (
		<div className="body">
			<div className="row">
				<h1 className="col-12">TodoList</h1>
			</div>
			<Todo />
		</div>
	);
};

export default Home;
