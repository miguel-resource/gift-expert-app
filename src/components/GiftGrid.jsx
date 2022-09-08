import { useFetchGifts } from '../hooks/useFetchGifts.js';
import { GiftItem } from './GiftItem'

export const GiftGrid = ({ category }) => {
  
  const {images, isLoading} = useFetchGifts( category )

    
  return(
    <>
      <h2>{ category }</h2>

      <ol>
        {
          images.map(img => (
            <GiftItem 
              key={img.id} 
              title={img.title}
              url={img.url}
            />
          ))
        }

        {isLoading ? <p>Cargando...</p> : null}
      </ol>
    </>
  )
}
