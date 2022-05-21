const getData = new Promise((resolve, reject) => {
	const notes = JSON.parse(localStorage.getItem("notes"));
	if (notes) {
		resolve(notes);
	} else {
		reject("Error");
	}
});

export default getData;
