const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const VerPlantaPage = require('./pages/ver-planta');
const NuevaPlantaPage = require('./pages/nueva-planta');
const EditarPlantaPage = require('./pages/editar-planta');



const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-planta/:id', element: <VerPlantaPage /> },
	{ path: '/nueva-planta', element: <NuevaPlantaPage /> },
	{ path: '/editar-planta/:id', element: <EditarPlantaPage /> },
	
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
