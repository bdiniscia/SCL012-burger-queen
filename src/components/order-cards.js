import React from 'react';
import PropTypes from 'prop-types'
import './order-cards.css'

const OrderCards = ({name, table, orderName, orderOption, state, orderExtras, delivered, onClick}) => {
    return (
        <div
            className = 'order-cards'
            onClick = {onClick}>
                <div className='identification'>
                    <p>{name}</p>
                    <p>Mesa: {table}</p>
                </div>
                <div>
                    <p>{orderName}</p>
                    <p>{orderOption}</p>
                    <p>{orderExtras}</p>
                </div>
                <div className='status'>
                    <p>{state}</p>
                    <p>{delivered}</p>
                </div>
        </div>
    )
}

OrderCards.propTypes = {
    onClick: PropTypes.func
}

export default OrderCards;