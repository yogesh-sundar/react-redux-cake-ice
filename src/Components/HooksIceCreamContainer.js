import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {

    const numberOfIcecreams = useSelector(state => state.iceCream.numberOfIceCreams)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Number of IceCreams - {numberOfIcecreams}</h1>
            <button onClick={()=>dispatch(buyIceCream()) }>Buy Icecream</button>
        </>
    )
}

export default HooksIceCreamContainer
