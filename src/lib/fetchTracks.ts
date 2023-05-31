const apiToken: string = 'BQBlMZnJwxGEWR_nXLG1Gp4k_8Jud583ZnjZeR9aedjOnxMvAtd1948nZMNgRFiKtZmtcZuXqSqkiylUQ_0zE9fPpf-dDZBiLJAtIgex0iqrEUiTzZgoeIk3S2aVq-W3ZQyGaxJ6Z-qY1nTeiP_vqokZaaYqJGHl6dpvBk6W0GGqsZA0gk9d1sef00SfakIbqbRoVztpdO5rSt-ezGozb6caTLk';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
