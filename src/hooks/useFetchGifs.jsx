import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGif";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; //este State me retorna Data:[] y loading en true
};
