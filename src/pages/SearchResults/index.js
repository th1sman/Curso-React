
import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from '../../components/Spinner'
import {useGifs} from '../../hooks/useGifs'

function SearchResults( params ) {

    const { keyword } = params
    const {loading, gifs} = useGifs({ keyword })

    console.log('-')


    return <>
    {loading
          ?  <Spinner />
          :  <ListOfGifs gifs={gifs} />
    }
        </>   
}

export default SearchResults
