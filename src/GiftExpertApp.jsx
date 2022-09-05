import { useState } from "react"
import { AddCategory } from './components/AddCategory.jsx'
import  { GiftGrid } from './components/GiftGrid.jsx'

export const GiftExpertApp = () => {

  const [categories, setCategories,] = useState(['One punch man', 'One piece'])
  
  const addCategory = ( newCategory ) => {
    console.log(newCategory);
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories])
  };

  return (
    <>
      {/* titulo*/}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory={ (event) => addCategory(event)}/>

      {/* Listado */}

      {
        categories.map(category => (
          <GiftGrid
            key={ category }
            category={ category }
          />
        ))
      }  

    </>
  )
}
