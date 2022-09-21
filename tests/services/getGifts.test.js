import { getGifts } from "./../../src/services/giftsServices";

describe('Pruebas del servicio GetGifts', () => {
  
  test('debe retornar un arreglo de gifts', async() => {
    const gifts = await getGifts('Danny Phantom');
    
    expect( gifts.length ).toBeGreaterThan( 0 );
    expect( gifts[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
