import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [valueInput, setValueInput] = useState('')

  const onInputChange = ({ target }) => {
    setValueInput(target.value)
  }

  const onSubmitEvent = (event) => {
    event.preventDefault();

    const newValue =  valueInput.trim()
    if(newValue.length <= 1) return;
    onNewCategory( newValue );
    // setCategories(categories => [valueInput, ...categories]);
    setValueInput('')
  }

  return (
    <form aria-label='form' onSubmit={ (event ) => onSubmitEvent( event)}>
      <input
        type="text"
        placeholder="Buscar un gift"
        value={ valueInput }
        onChange={ onInputChange }/>
    </form>
  )
}
