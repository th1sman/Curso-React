import {useContext,useEffect, useState} from 'react'
import getGifs from  '../services/getGifs'
import GifsContext from '../context/StaticContext'

export function useGifs ({keyword} = { keyword: null}) {
    const [loading, setLoading] = useState(false)
    
    const {gifs, setGifs} = useContext(GifsContext)

    

    useEffect(function () {
        setLoading(true)
   
        // Recuperamos la keyword del localStorage
        const KeywordToUse = keyword || localStorage.getItem
        ('lastKeyword') || 'random'

        getGifs({keyword: KeywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // Guardamos la keyword en el localStorage
                localStorage.setItem('LastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return {loading, gifs}
}