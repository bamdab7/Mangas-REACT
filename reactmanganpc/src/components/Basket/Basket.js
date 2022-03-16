import React from 'react';

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    return(
        <div>
            <h1>Carrito</h1>
            <div> {cartItems.length === 0 && <div>El carrito esta vacio</div>} </div>
            {cartItems.map((item)=>(
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <buttom onClick={()=>onAdd(item)} className="add">+</buttom>
                        <buttom onClick={()=>onRemove(item)} className="remove">-</buttom>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty}x ${item.price.toFixed(2)} 
                                {/* muestra el precio con dos decimales */}
                    </div>
                </div> 
            ))}
        </div>
    );
}