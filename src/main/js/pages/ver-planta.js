const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerPlantaPage = () => {

    let { id } = useParams();
    const [planta, setPlanta] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/planta/' + id
        }).done(response=>setPlanta(response.entity))
    }, [])

    return (
        <>
            <h1>Ver Plantas</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{planta.nombre}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{planta.categoria}</td>
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>{planta.descripcion}</td>
                </tr>
            </table>

            <Link to="/">Regresar</Link>
        </>
    )

}

module.exports = VerPlantaPage;