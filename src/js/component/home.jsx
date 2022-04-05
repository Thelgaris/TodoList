import React from "react";
import Todo from "./Todo.jsx";
import TodoList from "./TodoList.jsx";

const Home = () => {
	return (
		<div className="body">
			<div>
				<h1>TodoList</h1>
			</div>
			<Todo />
			<TodoList />
			<button type="button" class="btn btn-primary">
				Don't be lazy my friend :)
			</button>
		</div>
	);
};

export default Home;
