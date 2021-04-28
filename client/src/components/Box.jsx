import React, { useRef, useState } from 'react';

function Box(props) {
	const [color, setColor] = useState('red')

	const arr = ['pink', 'red', 'blue', 'yellow']

	function change() {
		setInterval(()=>{
			let index = Math.trunc(Math.random() * 4)
			setColor(arr[index])
		}, 500)
	}

	return (
		<div>
			<div className='box-color' style={{backgroundColor : color}}>
				adu
						</div>
			<button onClick={change}>change</button>
		</div>
	);
}

export default Box;