import Card from './Card';
import classes from './AddUser.module.css';
const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'> Username</label>
				<input id='username' type='text' />
				<label htmlFor='age'> age</label>
				<input id='age' type='number' />
				<button type='submit'> Submit </button>
			</form>
		</Card>
	);
};

export default AddUser;
