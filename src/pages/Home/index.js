import React from 'react'
import { Link} from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador']

function Home() {

    const {gifs} = useGifs()

    
    //Recibe el evento del submit del formulario
    const handleSubmit = evt => {
        //Evitar que el evento se ejecute por defecto
        evt.preventDefault()
     
    }
    //Recibe el evento onChange del input
    const handleChange = evt =>{

    }   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here" onChange={handleChange} type="text"  />
            </form>
            <h3 className="App-title">Ultima busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los Gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de
                    {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home
