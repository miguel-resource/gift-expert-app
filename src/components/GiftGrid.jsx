import { getGifts } from './../services/giftsServices.js'

export const GiftGrid = ({ category }) => {

  getGifts(category)
  
  return(
    <>
      <h2>{ category }</h2>
    </>
  )
}
