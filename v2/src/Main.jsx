import React from 'react'

import Header from './Header/Header.jsx'
import Card from './Components/Card.jsx'

import Container from 'react-bootstrap/Container';

const style = {
	container: {
		backgroundColor: '#fff'
	}
}

const Home = () => (
	<Container fluid="true" style={style.container}>
		<Header/>
		<Container className="d-flex justify-content-center align-items-center text-center">
			<Card 
				title="Cível" 
				imageLink="https://via.placeholder.com/250x150.png?text=Cível"
				text="O Direito Civil é o principal ramo do direito privado e trata-se do conjunto de normas que regem as relações entre os particulares, seu estado, sua capacidade, sua família e principalmente sua propriedade"
				url="civel"
			/>
			<Card 
				title="Penal" 
				imageLink="https://via.placeholder.com/250x150.png?text=Penal"
				text="O Direito Civil é o principal ramo do direito privado e trata-se do conjunto de normas que regem as relações entre os particulares, seu estado, sua capacidade, sua família e principalmente sua propriedade"
				url="penal"
				disabled
			/>
			<Card 
				title="Processo tributário" 
				imageLink="https://via.placeholder.com/250x150.png?text=Tributario"
				text="O Direito Civil é o principal ramo do direito privado e trata-se do conjunto de normas que regem as relações entre os particulares, seu estado, sua capacidade, sua família e principalmente sua propriedade"
				url="tributario"
				disabled
			/>
			<Card 
				title="Trabalhista" 
				imageLink="https://via.placeholder.com/250x150.png?text=Trabalhista"
				text="O Direito Civil é o principal ramo do direito privado e trata-se do conjunto de normas que regem as relações entre os particulares, seu estado, sua capacidade, sua família e principalmente sua propriedade"
				url="trabalhista"
				disabled
			/>
		</Container>
	</Container>
)

export default Home