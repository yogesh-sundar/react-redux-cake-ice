import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from "../redux"

function HooksCakeContainer() {
    //useSelector Hook - selector funtions receives redux state as an argument
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    //useDispatch Hook - It returns a reference to Dispatch funtion from redux store
    const dispatch = useDispatch()
    return (
        <>
            <h1>Num of cakes - {numberOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </>
    )
}

export default HooksCakeContainer
