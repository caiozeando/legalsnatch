import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
	container: {
		backgroundColor: '#007bff',
		height: '100%',
		padding: '30px'
	},

	containerH1: {
		color: "#fff",
		margin: '5% 0px',
		width: '65%'
	},

	buttonText: {
		color: '#007bff'
	},

	img: {
		height: '20%'
	}
}

const Home = () => (
	<Container fluid="true" className="d-flex flex-column justify-content-center align-items-center text-center" style={style.container}>
		<img
			alt=""
			src={require('./image-home.png')}
			className="d-inline-block align-top"
			style={style.img}
		/>
		<div style={style.containerH1}>
			<h1>
				Desenvolva seus conhecimentos jurídicos! <br/> 
				<small> 
					Viaje pelo mundo processual e resolva situações da prática profissional, baseado em casos reais! 
				</small> 
			</h1>
		</div>
		<p>
			<Link to="/modules/">
		   		<Button variant="light" style={style.buttonText} size="lg">
		   			JOGAR <FontAwesomeIcon icon="play" /> 
		   		</Button>
		   	</Link>
		</p>
	</Container>
)

export default Home