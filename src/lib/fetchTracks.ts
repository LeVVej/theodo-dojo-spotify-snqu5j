import { SavedTrack, SpotifyType } from "spotify-types";

const apiToken: string = 'BQDAf0EwUU9iS3Nepr4oZXPwdlrD44Yigd88MtYAHxrkaET3YhT5pByA_Ovif5i5vk0eZ8yC-2V7ThuplMo8Og8XYnaXezpd3cQYoaCHTROZPOhbWFw7dSIk4Pf1KzVf_4lNnMs8CWm4tO9NIs2btBRKPKu519vbDejDWMjLeAyQRAWHlxUygd0AJxJh-PqrGNbM_cHSf_HzWu6HXdQdfQ';

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
