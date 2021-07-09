import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);

    jest.clearAllMocks();
  });
  const value = "Hola Mundo";

  test("El componente debe renderizarse perfectamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de Cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
  });

  //   test("El parrafo debe coincidir con el argumento que yo le estoy enviando", () => {
  //     expect(wrapper.find("p").text().trim()).toBe(value);
  //   });

  test("No debe de Postear la informacion con submit ", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    const input = wrapper.find("input");

    input.simulate("change", { target: { value } });
    expect(input.props().value).toBe("");

    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    // expect(setCategories).toHaveBeenCalledWith( expect.any(function) );

  });
});
