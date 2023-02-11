import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

import { Link } from 'react-router-dom'

const Product = ({ img, id, name, price }) => {
  return (
    <Wrapper>
      <div className='container'>
        <Link to={`/products/${id}`}>
          <img src={img} alt={name} />
        </Link>

        <footer className='footer-content'>
          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </footer>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    margin: 2rem;
    background: var(--clr-primary-1);
    border: 1px solid var(--clr-black);
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    transition: transform 0.25s;
  }
  .container:hover {
    transform: scale(1.1);
  }
  .footer-content {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    background: var(--clr-primary-1);
  }
  .footer-content h5 {
    font-weight: 300;
    letter-spacing: var(--spacing);
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  @media (min-width: 992px) {
    .container {
      margin: 0;
    }
  }
`
export default Product
