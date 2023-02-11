import React from 'react'
import styled from 'styled-components'
import v1 from "../assets/v1.mp4"
import v2 from '../assets/v2.mp4'
import v3 from '../assets/v3.mp4'
import v4 from '../assets/v4.mp4'
import v5 from '../assets/v5.mp4'
import v6 from '../assets/v6.mp4'
import v7 from '../assets/v7.mp4'
import v8 from '../assets/v8.mp4'
import v9 from '../assets/v9.mp4'
import v10 from '../assets/v10.mp4'
import v11 from '../assets/v11.mp4'
import v12 from '../assets/v12.mp4'
import v13 from '../assets/v13.mp4'
import v14 from '../assets/v14.mp4'




const LastCategories = () => {
  return (
    <Wrapper>
      <div className='last-categories'>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v1} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v2} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v3} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v4} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v5} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v6} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v7} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v8} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v9} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v10} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v11} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v12} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v13} type='video/mp4' />
          </video>
        </article>
        <article>
          <video controls autoPlay muted loop className='video'>
            <source src={v14} type='video/mp4' />
          </video>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .video {
    display: block;
    width: 200px;
    height: 500px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .last-categories {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 992px) {
    .last-categories {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  }
`
export default LastCategories