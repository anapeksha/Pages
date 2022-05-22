import React, { useEffect, useState } from "react";
import BasicCard from "../components/BasicCard";
import getData from "../controllers/getData";

const ViewNotes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const data = getData();
		setNotes(data);
	}, []);

	return (
		<div className="view-notes-body">
			{notes &&
				notes.map((note) => {
					<BasicCard
						title={note.title}
						date={note.title}
						content={note.content}
					/>;
				})}
		</div>
	);
};

export default ViewNotes;
