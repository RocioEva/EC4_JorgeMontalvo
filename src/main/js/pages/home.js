const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { planta: [], musicos: [], bandas: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/plantas' }).done(response => {
			this.setState({ planta: response.entity._embedded.utiles });
		});

		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});

		client({ method: 'GET', path: '/api/bandas' }).done(response => {
			this.setState({ bandas: response.entity._embedded.bandas });
		});

	}
	render() {
		return (
			<>
				<h1>Bienvenido a mi tienda!!</h1>
				<h2>Tipos de Plantas Hornamentales</h2>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Plantas Hornamentales" emoji="🌻" />
						<PlantaList planta={this.state.planta} />
						<Link to="/nueva-planta">Ingresar una planta</Link>
					</div>
				</div>

			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class PlantaList extends React.Component {
	render() {
		const planta = this.props.planta.map(planta =>
			<Planta key={planta._links.self.href} planta={planta} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Acciones</th>
					</tr>
					{planta}
				</tbody>
			</table>
		)
	}
}
//tengo errores


class Planta extends React.Component {
	render() {
		const id = this.props.planta._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.planta.nombre}</td>
				<td>{this.props.planta.categoria}</td>
				<td>
					<Link to={"/ver-planta/" + id}>Ver</Link> |
					<Link to={"/editar-planta/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}



module.exports = HomePage;