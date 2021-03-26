import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)

    const {gifs, setGifs} = useContext(GifsContext)


    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    useEffect (function () {
        setLoading(true)   

        getGifs({ keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, setGifs])

    return { loading, gifs }
}