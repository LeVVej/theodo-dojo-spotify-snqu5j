import { SavedTrack, SpotifyType } from "spotify-types";

const apiToken: string = 'BBQDtFpPDYTw4fhT2QfqJr1JE51iBtbojBD0FnAn3O8kTAYG8vLRmdQg6SO1imhGDPs3yXahVgJgj6cpZUB1mhYAFgPuG1p8Wzp346xKhVxp5ouj5t8pvHGUixrXe9LypXsDu8k-5pjnDyw5L6NZW9CMVHDvofM0jEZP0ASzhW0YghmCRAG1-c1wZRpk60oXIAWuvIuBkShgns4QI7NdfrA';

export const fetchTracks = async () :Promise<SavedTrack> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json();

  return data.items;
};
