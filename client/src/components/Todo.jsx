import {React, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import { addPhoto } from '../slices/nameSlice';



Todo.propTypes = {
	list: PropTypes.array.isRequired,
	addWork: PropTypes.func.isRequired,
	delWork : PropTypes.func.isRequired,
};

function Todo(props) {
	let { list, addWork, delWork } = props
	const [value, setValue] = useState('') // hook state
	const dispatch = useDispatch() //dispatch action redux
	const arr = useSelector(state => state.nameReducer) // get state from reducer

	function handleValue(e){
		setValue(e.target.value)
	}

	function addToWork(e) {
		e.preventDefault()
		addWork(value)
		setValue('')
	}

	function addToArr(){
		dispatch(addPhoto(value)) // call action
	}

	return (
		<div>
			<input type="text" onChange={handleValue}/>
			<button onClick={addToArr}>click me</button>
			<hr/>
			{arr}

			<form onSubmit={addToWork}>
				<input type="text" value={value} onChange={handleValue}/>
				<button>Add</button>
			</form>
			<ul>
				{list.map((text, index) => {
					return (
						<li key={index} style={{cursor : 'pointer'}} onClick={()=>delWork(index)}>{text}</li>
					)
				}
				)}
			</ul>
		</div>
	);
}

export default Todo;