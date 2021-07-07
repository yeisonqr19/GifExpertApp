import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
describe("Test Para el componente GifGridItem", () => {
  const title = "Soy un nuevo titulo";
  const url = "https://localhost/imagen.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe de Mostrar correctamente mi componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el titulo ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("la Imagen debe de tener el SRC y el ALT igual al de los props ", () => {
    const img = wrapper.find("img");
    // console.log(img.props().src);
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
});
