const apiToken: string = 'BQBkjhAsbEb7KOncqvEytP1PbIMlaRYsOd0ASWGcJWpdMVjNUcGSByhHFYqmA4M7t_3a2XIjjbfEUk0rW1phr9jQqha1P9VCoLiD4zJbakeMOofXcsvyInM30DTFmdz6Fgd8y39qgnmDuhMgPnoqBxniLklJdv6U-9qbNzbX2q9UOYKvh0zU4Du8qEJj97Bso855BEUAUz18aLT3rxH6Vg';

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
