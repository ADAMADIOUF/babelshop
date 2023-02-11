import React from 'react'
import styled from 'styled-components'
import fb from '../assets/ffb.png'
const FirstBanner = () => {
  return (
    <Wrapper>
     <div className="first-banner">
     <img src={fb} alt="" />
     </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .first-banner img {
   margin-top:5rem;
    width: 100%;
    background-attachment: fixed;
  }
`
export default FirstBanner