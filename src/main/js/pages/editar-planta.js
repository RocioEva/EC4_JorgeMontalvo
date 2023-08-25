const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarPlantaPage = ()=>{

    const [planta, setPlanta] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/planta/'+id
        }).done((response)=>setPlanta(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/planta/'+id,
            entity: planta,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Planta</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={planta.nombre} onChange={(e)=>setPlanta({...planta, nombre: e.target.value})} /> <br/>
                <label>Categoria</label>
                <input type="text" id="categoria" name="categoria" value={planta.categoria} onChange={(e)=>setPlanta({...planta, categoria: e.target.value})}  /> <br/>
                <label>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={planta.descripcion} onChange={(e)=>setPlanta({...planta, descripcion: e.target.value})}  /> <br/>
                
                <input type="submit" value="Editar Util Escolar" />
            </form>

        </>
    )
}

module.exports = EditarPlantaPage