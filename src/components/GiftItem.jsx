import React from 'react'
import PropTypes from "prop-types";

export const GiftItem = ({title, url}) => {
  return (
    <div>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

/* proptypes obligatorios */
GiftItem.prototype = { 
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
