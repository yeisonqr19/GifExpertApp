export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=RFA4NtKxKJdX5JNBeIuK8YXg2JAC4J8D`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gif = data.map((imagen) => {
    return {
      id: imagen.id,
      title: imagen.title,
      url: imagen.images?.downsized_medium.url,
    };
  });

  return gif;
};
