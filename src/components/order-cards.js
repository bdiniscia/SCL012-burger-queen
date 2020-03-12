import React from 'react';
import PropTypes from 'prop-types'
import './order-cards.css'

const OrderCards = ({name, table, order, state, delivered, onClick}) => {
    return (
        <div
        className = 'order-cards'
        onClick= {onClick} >
            <div className='identification'>
                <p>{name}</p>
                <p>Mesa: {table}</p>
            </div>
            <div>
              {order.map((item) => {
                return (
                <div>
                <p className='item mainItem'>{item.name}</p>
                <p className='item subMenus'>{item.option}</p>
                <p className='item subMenus'>{item.extras}</p>
                </div>
                )
              })}
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