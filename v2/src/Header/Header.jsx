import React from 'react'

import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';



const Header = () => (
	<Navbar bg="primary" variant="dark" fixed="top">
		<Link to="/">
			<Navbar.Brand>
				<img
					alt=""
					src={require('./laway-logo.jpg')}
					width="50"
					height="50"
				/>
				{' LAWAY'}
			</Navbar.Brand>
		</Link>
	</Navbar>
)

export default Header