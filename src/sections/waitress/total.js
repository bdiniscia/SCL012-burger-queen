import React, { Component } from 'react';
import '../../App.css';

class Total extends Component {
    render() {
        return (
            <div className='total'>
                <li>
                    {
                        this.props.total.map(item => {
                        return (
                        <div>
                            <ol>{item.name}</ol>
                            <ol>{item.price}</ol>
                        </div>
                        ) 
                        })
                    }
                </li>
                 
            </div>
        )
    }

}

export default Total;