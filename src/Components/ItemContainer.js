import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <>
            <h2>Item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {

    const itemState = ownProps.iceCream ? state.iceCream.numberOfIceCreams : state.cake.numberOfCakes;
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const itemDispatch = ownProps.iceCream ? () => dispatch(buyIceCream()) : () => dispatch(buyCake())
    return {
        buyItem: itemDispatch
    }
}
// if we not use mapStateToProps in connect function then we should include null instead because connect funtion
// cannot accept mapDispatchToProps as first parameter
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
