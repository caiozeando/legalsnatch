import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ModuleCard extends React.Component {
	render() {
		const style = {
			link: {
				color: "#fff"
			}
		};

		return (
			<Card style={{ width: '18rem', margin: '10px' }}>
			  {/*<Card.Img variant="top" src={this.props.imageLink} />*/}
			  <Card.Body>
			    <Card.Title>{this.props.title}</Card.Title>
			    <Card.Text>
			      {this.props.text}
			    </Card.Text>
			    <Button variant="primary" {...this.props}>
			    	{this.props.disabled 
			    		? "Entrar"
			    		: <Link style={style.link} to={"/play/" + this.props.url}>Entrar</Link>
			    	}
			    </Button>
			  </Card.Body>
			</Card>
		);
	}
};

export default ModuleCard