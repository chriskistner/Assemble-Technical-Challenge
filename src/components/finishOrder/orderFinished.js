import React, { Component } from 'react';

export default class FinishedOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    };

    componentDidMount = () => {
    };

    loadCheckoutForm = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className= "row align-items-center justify-content-start">
                    <div className="col bg-primary">
                        <h2 className="text-white text-left">Assemble Store</h2>
                    </div>
                </div>
                <div className = "row border-bottom align-items-end justify-content-between mt-3">
                    <div>
                    <h2 className="text-left"> Order Complete</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-3">
                    <div className="col-md-auto">
                        <h4>Horray! Way to order those products.</h4>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-3">
                    <div className="col-md-auto">
                    <button type="button" onClick={this.loadCheckoutForm} class="btn btn-primary">Go Home</button>
                    </div>
                </div>
        </div>
            )
        
    }
}