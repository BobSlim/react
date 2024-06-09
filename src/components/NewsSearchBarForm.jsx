
export const SearchBarForm = ({ callBack = () => console.log("hi") }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const submitData = Object.fromEntries(formData.entries());
		if (submitData.search == "") {
			return;
		}
		callBack(submitData);
	};

	return (
		<form action="" onSubmit={(event) => handleSubmit(event)}>
			<input type="text" name="search" id="" />
			<input type="date" name="from" id="" />
			<input type="date" name="to" id="" />
			<button type="submit">Search</button>
		</form>
	);
};
