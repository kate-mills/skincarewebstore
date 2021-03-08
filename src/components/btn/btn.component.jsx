import React from 'react'

import './btn.styles.scss'

const Btn  = ({children, ...rest}) => {
  return (
    <button className='custom-button' {...rest}>
      {children}
    </button>
  )
}

export default Btn 
