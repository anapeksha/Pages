const setData = (data) => {
	localStorage.setItem("notes", JSON.stringify(data));
};

export default setData;
