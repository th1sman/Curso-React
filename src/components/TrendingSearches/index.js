import React, { useEffect, useState, useRef } from 'react'
import getTrendingTerms from '../../services/getTrendingsTermsServices'
import Category from '../Category'

 function TrendingSearches () {
    const [trends, setTrends] = useState([])

   

    useEffect(function () {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends} />
}

function useNearScreen({}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()


    useEffect(function () {

        let observer

        const onChange = (entries, observer) => {
            const e = entries[0]
            
            if(e.insIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })
        observer.observe(fromRef.current)

        return () => observer.disconnect()
    })

    return {isNearScreen, fromRef}
}


export default function LazyTrending () {
   

    const {isNearScreen, fromRef} = useNearScreen()


    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}
    </div>

}
