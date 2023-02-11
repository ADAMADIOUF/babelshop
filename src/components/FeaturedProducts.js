import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
   <Wrapper className='section'>
      <div className='title'>
        <h2>les produits les plus recherchés</h2>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />
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
  
`
export default FeaturedProducts
