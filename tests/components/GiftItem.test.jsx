import { render, screen } from "@testing-library/react";
import { GiftItem } from "./../../src/components/GiftItem";

describe('Pruebas de <GiftItem>', () => {

  const title = 'Goku'
  const url = 'https://one-punch.com/saitam.jpg'

  test('debe hacer match el snapshot', () => {
    const { container } = render( <GiftItem title={title} url={url}/>)
    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con URL y ALT indicado', () => {
    
    render( <GiftItem title={title} url={url}/>);
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('debe de mostrar el titulo en el componente', () => {

    render( <GiftItem title={title} url={url}/>);
    expect( screen.getByText( title )).toBeTruthy();
  });
  
  
  
})
