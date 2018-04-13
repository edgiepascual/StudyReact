import React from 'react';
import { Link } from 'react-router-dom';


const HomeHeader = () => {
	return (
		<header>
			<div>
				<Link to="/"> Home </Link>
				<Link to="/about"> About </Link>
				<Link to="/contact"> Contact </Link>
			</div>
		</header> 
	);
}

export { HomeHeader }