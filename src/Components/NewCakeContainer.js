import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {

    const [number, setNumber] = useState(1);

    return (
        <>
        <h1>Number of cakes - {props.numberOfCakes} </h1>
        <input type="text"  value={number} onChange={e=> setNumber(e.target.value)} />
        <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </>
    )
}

//if you want to access redux state in your component you must define
// "mapStateToProps"(Name anything) function

const mapStateToProps = (state)=>{
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

//similary, to access dispatch you need to define mapDispatchToProps

const mapDispatchToProps = (dispatch)=>{
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}
// Connect function connects react components to redux store 
export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
