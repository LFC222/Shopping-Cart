import React from 'react'
import 
{
  MainContainer,
  CourseContainer,
} from './styles'
import { courses } from '../../../database'
import CourseCard from '../CourseCard'

function Courses({ handleAddCart }) {
  return (
    <MainContainer>
        <CourseContainer className='course-section'>
          {
            courses.map((course,index) => (
              <CourseCard 
                key={index} 
                img={course.url}
                title={course.name}
                price={course.price}
                handleAddCart={handleAddCart}
              />
            ))
          }
        </CourseContainer>
      </MainContainer>
  )
}

export default Courses