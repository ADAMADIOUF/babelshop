import React from 'react'
import styled from 'styled-components'
import f1 from "../assets/f1.png"
import f2 from '../assets/f2.png'
import f3 from '../assets/f3.png'
import f4 from '../assets/decoration.png'
import { Link } from 'react-router-dom'


const FirstCategories = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='f-cate-title'>
          <h3>acheter par catégorie</h3>
          <p>vous serez toujours heureux avec nous</p>
        </div>
        <div className='container-first-categories'>
          <article>
            <img src={f1} alt='' />

            <Link to={`/tissu`}>
              <button type='button' className='first-categories-btn'>
                tissu
              </button>
            </Link>
          </article>
          <article>
            <img src={f2} alt='' />
            <Link to={`/vesel`}>
              <button type='button' className='first-categories-btn'>
                vaisselles
              </button>
            </Link>
          </article>
          <article>
            <img src={f3} alt='' />
            <Link to={`/accessory`}>
              <button type='button' className='first-categories-btn'>
                accessoires
              </button>
            </Link>
          </article>
          <article>
            <img src={f4} alt='' />
            <button type='button' className='first-categories-btn'>
              décoration d'intérieur
            </button>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container-first-categories img {
    width: 100%;
  }
  .container-first-categories article {
    position: relative;
  }
  @media (min-width: 768px) {
    .container-first-categories {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  @media (min-width: 992px) {
    .container-first-categories {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .first-categories-btn {
    background: var(--clr-primary-1);
    margin-top: 0;
    position: absolute;
    top: 15rem;
    left: 8rem;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    border: none;
    border-radius: var(--radius);
    color: var(--clr-black);
    background: #efefef;
    cursor: pointer;
    transition: var(--transition);
  }
  .first-categories-btn:hover {
    background: var(--clr-primary-1);
  }
`
export default FirstCategories