import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

const TodoInput = ({ addItem }) => {
    const [value, setValue] = useState('')
    
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            // Evento que permite agregar el item (value)
            addItem(value)
            setValue('')
        },
        [setValue, addItem, value],
    )

    return ( 
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button className="btn-submit">Add item</button>
        </form>
     );
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addItem: value => dispatch({ type: 'ADD_ITEM', payload: { item: value}})
    })
}
 
export default connect(null, mapDispatchToProps)(TodoInput);