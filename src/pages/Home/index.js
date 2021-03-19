import React from 'react'
import { Link } from 'wouter'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador', 'Venezuela']

function Home() {

 


    return (
        <>
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
