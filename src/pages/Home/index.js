import React, { Component } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../util/format'
import api from '../../services/api'
import { ProductList } from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  async componentDidMount() {
    const response = await api.get('products')

    const data = response.data.map((product) => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }))

    this.setState({
      products: data,
    })
  }

  render() {
    const { products } = this.state

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.strong}</strong>
            <span>{product.priceFormated}</span>
            <button type="button">
              <div>
                <MdShoppingCart /> 45
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    )
  }
}
