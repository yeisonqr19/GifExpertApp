import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q={one+piece}&limit=10&api_key=RFA4NtKxKJdX5JNBeIuK8YXg2JAC4J8D`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map((imagen) => {
      return {
        id: imagen.id,
        title: imagen.title,
        url: imagen.images?.downsized_medium.url,
      };
    });

    console.log(gif);

    setImages(gif);
  };

  return (
    <>
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </>
  );
};

export default GifGrid;
