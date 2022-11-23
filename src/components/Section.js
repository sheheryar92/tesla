import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../components/Style.css'
import Styled from 'styled-components'


function Section({imageBg, tittle , description, leftButoon, rightButton}) {
  return (
    <Container  imageBg={imageBg}  >
    
    <div className='model_name'>
    <h1>{tittle}</h1>
      <p>{description}</p>
      </div>  
      {/* BUTTONS */}
      <div className='buttons_contaoner'>
<div className='buttons'>
<button className='left_button'>{leftButoon}</button>
{rightButton && <button className='right_button'>{rightButton}</button>}

</div>
<KeyboardArrowDownIcon className='down_arrow' />
</div>
      {/* BUTTONS */}

    </Container>
  )
}

export default Section


const Container = Styled.div`
 /* background-image: url("/images/model-s.jpg"); */

background-image: ${props => `url(${props.imageBg})`} ;
background-position: center;
background-repeat: no-repeat;
height: 100vh;
justify-content: space-between;
flex-direction: column;
display: flex;
align-items: center;
background-size: cover;
`
