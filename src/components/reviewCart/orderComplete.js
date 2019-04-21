import React, { Component } from 'react';
import OrderBasket from './ordeBasket';

export default class OrderComplete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, 
                    { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, 
                    { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }],
            total: 0
        }
    };

    componentDidMount = () => {
        this.getTotal();
    };

    getTotal =() => {
        const total = this.state.cart.map( item => item.unitPrice * item.quantity)
        this.setState({
            total : total.reduce((a,b) => a+b, 0)
        })
    };

    loadCheckoutForm = () => {
        this.props.history.push('/checkout')
    }

    render() {
        return (
            <div>
                <div className= "row align-items-center justify-content-start">
                    <div className="col bg-primary">
                    <h2 className="text-white text-left">Assemble Store</h2>
                    </div>
                </div>
                <OrderBasket userCart={this.state.cart} total={this.state.total} />
                <div className="row justify-content-end mt-3">
                    <div className="col-md-auto">
                        <button type="button" onClick={this.loadCheckoutForm} class="btn btn-primary">Check Out</button>
                    </div>
                </div>
            </div>
        )
    }
}