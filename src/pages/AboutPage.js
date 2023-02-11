import React from 'react'
import styled from 'styled-components'
import about from "../assets/about1.png"
import about1 from '../assets/about-1.jpeg'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <Wrapper>
     <div className="about">
      <div className="about-big-img">
       <img src={about} alt="" />
      </div>
      <div className="section-center about-container">
       <article className="about-details">
        <p>Cette boutique a été créé uniquement dans le but de vous permettre d'avoir des produits de qualité avec des prix abordables .</p>
        <p>
          les produits disponibles:
          vêtements, accessoires de beauté,vaisselles et décoration d'interieur.
        </p>
       </article>
       <article className="about-image">
<img src={about1} alt="" />
       </article>
      </div>
     </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .about-big-img img {
    width: 100%;
    margin-top: 5rem;
  }
  .about-image img {
    width: 100%;
  }
  .about-container {
    margin-top: 5rem;
  }
  @media (min-width: 992px) {
    .about-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
`
export default AboutPage