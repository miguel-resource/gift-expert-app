import React from 'react'

export const GiftItem = ({title, url}) => {
  return (
    <div>
        <img src={url} alt={title} />
        <p>{title}s</p>
    </div>
  )
}
