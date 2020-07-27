import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        if (this.props.menuItem) {
            this.state = {
                name: this.props.menuItem.name,
                price: this.props.menuItem.price,
                imageURL: this.props.menuItem.imageURL,
                description: this.props.menuItem.description,
                id: this.props.menuItem._id,
                restaurantId: this.props.menuItem.restaurantID,
                showDialog: false,
                totalSelected: 0
            }
        }
    }

    // ratings = rating => {
    //     var ratings = [];
    //     for (var i = 0; i < rating; i++) {
    //         ratings.push(
    //             <span class="fa fa-star checked"></span>
    //         )
    //     }
    //     return ratings;
    // }

    open = _ => this.setState({ showDialog: true });

    close = _ => {
        this.setState({
            showDialog: false,
            totalSelected: 0
        });
    }

    onQuantityChange = e => {
        e.preventDefault();
        this.setState({
            totalSelected: Number(e.target.value) || 0
        });
    }

    addToShoppingCart = e => {
        this.close();
        if (this.state.totalSelected) {
            this.props.onUpdateShoppingCart(this.props.menuItem, this.state.totalSelected);
        }
    }
    
    render() {
        return (
            <Link className="text-link" onClick={this.open}>
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1200px-Glazed-Donut.jpg" />
                    <div class="card-body"> 
                        <p className="title">{this.state.name}</p>
                        <p className="description">${this.state.price}</p>
                        <p className="description">{this.state.description}</p>
                        {/* <div className="rating">
                            {this._getRatings(this.state.rating)}
                        </div> */}
                    </div>
                </div>
                <Dialog onDismiss={this.close} isOpen={this.state.showDialog}>
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1200px-Glazed-Donut.jpg" />
                    <div class="card-body menu-item-modal"> 
                        <p className="title">{this.state.name}</p>
                        <p className="title">${this.state.price}</p>
                        <p className="title">{this.state.description}</p>
                        <input onChange={this.onQuantityChange} name="totalItems" type="number" min="0" step="1" placeholder="Total" required={true} />
                        {/* <div className="rating">
                            {this._getRatings(this.state.rating)}
                        </div> */}
                        <input onClick={this.addToShoppingCart} className="add-menu-item-modal-button" name="addMenuItemModalButton" type="submit" value="Add To Shopping Cart"/>
                    </div>
                </Dialog>
            </Link>
        )
    }
}