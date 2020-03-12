import React, { Component } from 'react';
import '../../App.css';
import './clientID.css'
import backButton from '../../imagenes/backButton.png'


class clientID extends Component {
    //Función que toma el valor del input del cliente
    handleChanges = (e) => {
        const client = e.target.value
        this.props.inputClient(client)
        
        
    }
    //Función que toma el valor del input de la mesa
    handleChange = (e) => {
        const table = e.target.value
        this.props.selectTable(table)
       
    }


    render() {
        return (
            <div className='clientID'>
                <div className='client'>

                <div className='button-back'>
                <img
                alt='backButton'
                src={backButton}/>

                <label className='titleClient'>Nombre del Cliente:</label>
                
                <input 
                onChange={(e) => this.handleChanges(e)} 
                className='inputClient'
                type='text'
                name='client'
                
                />


                <p className='titleClient'>Mesa:</p>

                <select
                onChange={(e) => this.handleChange(e)} 
                className='mesa'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>

                </div>
               
                </div>
               
            </div>
        )
    }

}

export default clientID;
