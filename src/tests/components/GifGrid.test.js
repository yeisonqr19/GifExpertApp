import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas Para el componente GigGrid", () => {
  const category = "One piece ";

  test("El componente me debe renderizar y Hacer un SnapShot ", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de Mostrar Items Cuando se cargan imagenes con el <useFetchGif/>", () => {
    const gif = [
      {
        id: "abc",
        url: "https://localhost/images/imagen.jpg",
        title: "Titulo cualquiera",
      },
      {
        id: "123",
        url: "https://localhost/images/imagen.jpg",
        title: "Titulo cualquiera 2",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gif,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gif.length);
  });
});
