import React from "react";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas Sobre mi customHook useFetchGif", () => {
  test("should ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One piece")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe de retornar un arreglo de imagenes y el loading en false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One piece")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
