import React from 'react';

export default function itemInfo(props) {
    return (
        <div>
            <div className = "row">
                <div className = "col-6"> 
                    <span>{props.name}</span>
                </div>
                <div className = "col-3">
                    <span>{props.quantity}</span>
                </div>
                <div className = "col-3">
                    <span>${props.unitPrice}.00</span>
                </div>
            </div>
        </div>
    )
}