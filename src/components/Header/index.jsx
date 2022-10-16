import React from 'react'
import { StyledHeader, StyledLink } from './styled'

const Header = () => {
  return (
    <>
    <StyledHeader>
      <nav>
        <StyledLink to={'/form'}>Form</StyledLink>
        <StyledLink to={'/'}>Grid</StyledLink>
      </nav>
    </StyledHeader>
    </>
  )
}

export default Header