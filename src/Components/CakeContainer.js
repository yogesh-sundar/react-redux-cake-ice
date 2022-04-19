import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <>
        <h1>Number of cakes - {props.numberOfCakes} </h1>
        <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}
// Connect function connects react components to redux store 
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
