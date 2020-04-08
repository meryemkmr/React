import React, { Component } from 'react';
import { connect } from 'react-redux';
import addProduct from '../actions/addProduct';
import './styless.css'

class AddProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            productPrice: 0,
            product: [
                {
                    productName: 'Toilette Paper',
                    productPrice: 13
                }
            ]

        }
    }


    productNameChangeHandler = (e) => {
        this.setState({
            productName: e.target.value
        })
    }

    productPriceChangeHandler = (e) => {

        this.setState({
            productPrice: e.target.value
        })
    }


    submitProductHandler = (e) => {

        e.preventDefault();

        this.props.onAddProduct({
            productName: this.state.productName,
            productPrice: this.state.productPrice
        })

        this.setState({
            productName: "",
            productPrice: 0
        })

    }


    render() {
        return (
            <div className="main">
                Add Product

                <form onSubmit={this.submitProductHandler} >

                    <label>Product name</label>

                    {/* {this.state.productName}<br /> */}
                    <input value={this.state.productName} type="text" placeholder="ProductName" onChange={this.productNameChangeHandler} />

                    <label >Product Price</label>

                    <input value={this.state.productPrice} type="number" placeholder="product price" onChange={this.productPriceChangeHandler} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }

}

let mapDispatchToProps = (dispatch) => {

    return {
        onAddProduct: (productCart) => dispatch(addProduct(productCart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)