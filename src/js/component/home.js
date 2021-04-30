import React, { useState } from "react";

export function Home() {
	const [deber, setDeber] = useState("");
	const [list, setList] = useState([]);

	function eliminar(index) {
		const deletelist = list.filter((item, key) => index !== key);
		setList(deletelist);
	}

	return (
		<div className="text-center mt-5">
			<h1 className="display-5 text">Lista de Tareas</h1>
			<input
				value={deber}
				onChange={e => {
					setDeber(e.target.value);
				}}
				onKeyPress={e => {
					if (e.key == "Enter") {
						setList(list.concat(deber));
						setDeber("");
					}
				}}
			/>
			{list.map((item, index) => {
				return (
					<li key={index}>
						{item}
						<button
							onClick={() => eliminar(index)}
							type="button"
							className="btn btn-link">
							X
						</button>
					</li>
				);
			})}
		</div>
	);
}
