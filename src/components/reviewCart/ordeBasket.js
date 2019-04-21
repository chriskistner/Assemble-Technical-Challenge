import React, { Component } from 'react';
import ItemInfo from './itemInfo';

export default class OrderBasket extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className = "row border-bottom align-items-end justify-content-between mt-3">
                    <div className = "col-6">
                        <h2 className="text-left"> Your Cart</h2>
                    </div>
                    <div className = "col-3">
                        <span>Price</span>
                    </div>
                    <div className="col-3">
                        <span>Quantity</span>
                    </div>
                </div>
                {
                    this.props.userCart.map(product => <ItemInfo key={product.sku} {...product} />)
                }
                <div className="row border-top align-items-end justify-content-between mt-3">
                    <div className="col-9">
                        <span className="text-right">Total</span>
                    </div>
                    <div className="col-3">
                        <span>${this.props.total}.00</span>
                    </div>
                </div>
            </div>
        )
    }
}