import React, {useState} from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador', 'Venezuela']

function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const { loading, gifs} = useGifs()


    const handleSubmit = evt => {
        //Navegar a otra ruta
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword}/>
                <button>Buscar</button>
            </form>

            <h3>Ultima Busqueda</h3>    
            <ListOfGifs gifs={gifs} />


            <h3 className="App-title"> Los Gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link 
                            to={`/search/${popularGif}`}>
                        Gifs populares {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home
