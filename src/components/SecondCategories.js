import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import f1 from '../assets/sc.png'
import f2 from '../assets/sc2.png'


const SecondCategories = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='s-cate-title'>
          <h3>offre spéciale</h3>
          <p>
            appellez nous sur whatsapp <span>livraison rapide</span>
          </p>
        </div>
        <div className='container-second-categories'>
          <article>
            <img src={f1} alt='' />
            <div>
              <h3>bijou & montre</h3>
              <Link to={`/accessory`}>
                <button type='button' className='second-categories-btn'>
                  acheter
                </button>
              </Link>
            </div>
          </article>

          <article>
            <img src={f2} alt='' />
            <div>
              <h3>vetements</h3>
              <Link to={`/clothe`}>
                <button type='button' className='second-categories-btn'>
                  acheter
                </button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .s-cate-title {
    margin-top: 5rem;
  }

  .container-second-categories img {
    width: 100%;
    height: 200px;
    object-fit: fill;
    transition: var(--transition);
    cursor: pointer;
    position: relative;
  }
  .container-second-categories article {
    position: relative;
    margin: 1rem;
  }
  .container-second-categories article h3 {
    font-size: 1rem;
    color: var(--clr-white);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .container-second-categories article img:hover {
    transform: scale(1.1);
    border-radius: 50%;
    transition: 1s ease;
  }
  .second-categories-btn {
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    border: none;
    background: var(--clr-black);
    color: var(--clr-white);
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .second-categories-btn:hover {
    background: var(--clr-primary-1);
    transition: 1s ease;
  }
  .container-second-categories article div {
    position: absolute;
    top: 5rem;
    left: 8rem;
  }

  @media (min-width: 425px) {
    .container-second-categories article div {
      left: 12rem;
    }
  }

  @media (min-width: 768px) {
    .container-second-categories article div {
      left: 22rem;
    }
  }

  @media (min-width: 992px) {
    .container-second-categories {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
`
export default SecondCategories
