import React, { Component } from 'react';

export default class ShippingInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    };

    componentDidMount = () => {
    };


    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    };


    loadCompletionForm = () => {
        this.props.history.push('/finished')
    }

    render() {
        return (
            <div>
                <div className= "row align-items-center justify-content-start">
                    <div className="col bg-primary">
                        <h2 className="text-white text-left">Assemble Store</h2>
                    </div>
                </div>
                <div className = "row border-bottom align-items-end justify-content-between my-3">
                    <div>
                    <h2 className="text-left"> Check Out</h2>
                    </div>
                </div>
                <div className="row">
                <form onSubmit={(event) => {
                event.preventDefault()
                this.loadCompletionForm()}}>
                <div className="row">
                    <div className="col-6"> 
                        <div className="form-row">
                        <div className="form-group">
                            <div className="col">
                            <h4 className="text-left">Payment Information</h4>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Name on Card</p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="name" onChange={this.handleChange} placeholder="Name on Card"/>    
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Card Number</p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="creditCard" onChange={this.handleChange} placeholder="XXXX-XXXX-XXXX-XXXX"/>   
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Expiration Date</p>
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" name="expDateMonth" onChange={this.handleChange} placeholder="MM"/>   
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" name="expDateYear" onChange={this.handleChange} placeholder="YYY"/>   
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">CVV</p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="CVV" onChange={this.handleChange} placeholder="City"/>   
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>
                    <div className="col-6"> 
                        <div className="form-row">
                        <div className="form-group">
                            <div className="col">
                            <h4 className="text-left">Shipping Address</h4>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Name</p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="shippingName" onChange={this.handleChange} placeholder="Full Name"/>    
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Address</p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="shippingAddress" onChange={this.handleChange} placeholder="address"/>   
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Apt/Suite/etc</p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="shippingSuite" onChange={this.handleChange} placeholder="Apt/Suite/etc"/>   
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">City</p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="shippingCity" onChange={this.handleChange} placeholder="City"/>   
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Country</p>
                                    </div>
                                    <div className="col">
                                        <select class="form-control" name="shippingCountry" onChange={this.handleChange}>
                                            <option>United States</option>
                                        </select> 
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">State</p>
                                    </div>
                                    <div className="col">
                                        <select class="form-control" name="shippingState" onChange={this.handleChange}>
                                            <option default disabled>State</option>
                                        </select>  
                                    </div>
                                </div>
                                <div className="row justify-content-start mb-2">
                                    <div className="col"> 
                                        <p className="text-left">Zip Code</p>
                                    </div>
                                    <div className="col">
                                        <input type="zipcode" className="form-control" name="shippingZip" onChange={this.handleChange} placeholder="Zip Code"/>   
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Place Order</button>
                    </div>
                </div>


            </form>
            </div>
        </div>
            )
        
    }
}