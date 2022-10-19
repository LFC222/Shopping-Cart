import React from 'react'
import 
{
  CardTitle,
  CardContainer,
} from './styles';

function CourseCard({img,title,price,handleAddCart}) {
  return (
    <CardContainer>
        <img className='cardimage' src={img}/>
        <CardTitle>{title} - R${price}</CardTitle>
        <button onClick={() => handleAddCart(img,title,price)}>ADICIONAR</button>
    </CardContainer>
  )
}

export default CourseCard