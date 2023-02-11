import React from 'react'
import styled from 'styled-components'
 import logo from "../assets/logo.png"
import {
  FaFacebook,
  FaTiktok,
  FaWhatsappSquare,
  FaInstagramSquare,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <Wrapper>
      <div className='footer'>
        <div className='section-center footer-container'>
          <article className='article-footer-social'>
            <img src={logo} alt='' className='logo-footer' />
            <div className='footer-links'>
              <span>
                <FaFacebook />
              </span>

              <span>
                <FaInstagramSquare />
              </span>

              <span>
                <FaTiktok />
              </span>

              <span>
                <FaWhatsappSquare />
              </span>
            </div>
          </article>
          <article className='footer-categories'>
            <h3>categories</h3>
            <button type='button'>tissu & VETEMENTS</button>
            <button type='button'>Accessoires</button>
            <button type='button'>vesel</button>
          </article>
        </div>
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span className='link-footer'> Babels's Shop</span>
        </h5>
        <h5>Tous les droits sont réservés</h5>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .footer {
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .footer-container {
    margin-top: 15rem;
  }
  .logo-footer {
    width: 10rem;
  }
  .article-footer-social span {
    color: var(--clr-primary-2);
    font-size: 2rem;
  }
  .footer-links span {
    margin: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .footer-links span:hover {
    color: var(--clr-primary-1);
  }
  @media (min-width: 992px) {
    .footer-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  .footer-categories h3 {
    color: var(--clr-black);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
  }
  .footer-categories button {
    display: block;
    background: transparent;
    border: none;
    font-size: 1rem;
    color: var(--clr-black);
    margin: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    padding: 1rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .footer-categories button:hover {
    color: var(--clr-primary-1);
  }
  .footer h5 {
    color: var(--clr-black);
    display: flex;
    justify-content: center;
  }
  .footer h5 span {
    color: var(--clr-primary-1);
    font-weight: bolder;
  }
`
export default Footer
