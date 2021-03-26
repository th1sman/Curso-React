import Category from 'components/Category'
import React, {useState} from 'react'
import { Link, useLocation } from 'wouter' // eslint-disable-next-line
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador', 'Venezuela']

function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation() // eslist-disable-next-line

    const { loading, gifs} = useGifs() // eslist-disable-next-line


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
         <div className="App-main">
             <div className="App-results">
                 <h3 className="App-title">Ultima busqueda</h3>
                 <ListOfGifs gifs={gifs} />
             </div>
             <div className="App-category">
                 <Category 
                    name="Categorias populares"
                    options={POPULAR_GIFS}
                    />
                    <Category
                        name="Mascotas"
                        options={['Perros', 'Gatos', 'Hamster']}
                        />
             </div>
         </div>
        </>
    )
}

export default Home
