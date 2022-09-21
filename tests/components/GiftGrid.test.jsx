import { GiftGrid } from "./../../src/components/GiftGrid";
import { render, screen } from "@testing-library/react";

describe('Test del componente <GiftGrid/>', () => {
  
  const category = 'San Andreas';

  test('debe de mostrar el loading', () => {
    
    render(<GiftGrid category={category}/>);
  });
  
})
