import { getGifs } from "../../helpers/GetGif";
describe("Pruebas en el componente getGif", () => {
  test("Debe de traer 10 Elementos", async () => {
    const gifs = await getGifs("Luffy");
    expect(gifs.length).toBe(10);
  });

  test("Debe De mostrar 0 elementos cuando no envie ninguna categoria ", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });

  

});
