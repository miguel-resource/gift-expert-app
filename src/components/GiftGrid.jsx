import { useFetchGifts } from '../hooks/useFetchGifts.js';
import { GiftItem } from './GiftItem';
import PropTypes from "prop-types";

export const GiftGrid = ({ category }) => {
  
  const {images, isLoading} = useFetchGifts( category );

  return(
    <>
      <h2>{ category }</h2>
      
      {isLoading ? <p>Cargando...</p> : null}
      
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

        
      </ol>
    </>
  )
}

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired
}
