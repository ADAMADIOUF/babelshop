import React from 'react'
import styled from 'styled-components'
import bc from '../assets/bbm.png'
import Error from './../components/Error'
import Loading from './../components/Loading'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
const ProductAccessory = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_four_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper>
      <div className='product-clothe'>
        <img src={bc} alt='' className='bc' />
      </div>
      <div className='title'>
        <h2>Collection d'accessoires pour Homme et Femme</h2>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          const { name, price, id, img } = product
          return (
            <div className='container'>
              <Link to={`/products/${id}`}>
                <img src={img} alt={name} />
              </Link>

              <footer className='footer-content'>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
              </footer>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .featured {
    margin-top: 5rem;
  }
  .featured img {
    width: 100%;
    height: 400px;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .featured {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  @media (min-width: 992px) {
    .featured {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .featured img {
    width: 100%;
    height: 400px;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
  }

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
export default ProductAccessory
