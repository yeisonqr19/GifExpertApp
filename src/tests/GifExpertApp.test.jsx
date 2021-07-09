import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas para el Componente Principal <GifExpertApp/>", () => {
  test("Debe renderizar el componente correctamente y hacer un snapshot", () => {

    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();

  });  
});
