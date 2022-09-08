import { useState, useEffect } from "react";
import { getGifts } from './../services/giftsServices'

export const useFetchGifts = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifts(category).then(newImages => {
          setImages(newImages);
          setIsLoading(false);
        })
    }, [])  

    return {
        images,
        isLoading    
    }
}