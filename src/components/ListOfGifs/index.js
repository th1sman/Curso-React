
import React from 'react'
import Gif from '../Gif'
import './ListOfGifs.css'

function ListOfGifs({ gifs }) {
    return <div className="ListOfGifs">
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    key={key}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}
export default ListOfGifs

