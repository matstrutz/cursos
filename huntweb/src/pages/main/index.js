import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async (page = 1) => {
        const response = await api.get('/products?page=' + page);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page } = this.state;

        this.loadProducts(page - 1);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        this.loadProducts(page + 1);
    }

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>Titulo: {product.title}</strong>
                        <p>Descrição: {product.description}</p>

                        <Link to={'/products/${product._id}'}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page == 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page == productInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        );
    }
}