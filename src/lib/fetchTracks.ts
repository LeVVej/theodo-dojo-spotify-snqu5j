import { SavedTrack, SpotifyType } from "spotify-types";

const apiToken: string = 'BQAacWaAfnQ9xUk-9i8109ZbVO7xKED-9_TqRdepcdEioHqqsq-HZK_YK8jvtMOKuEunRSkzr2L1DOujZxjNqAYR6Y7nlVVRcNqM1529xWK3PMlWageA0u7mRVxP4p7frqRt7Ca_nekgPLXGqicejC7YWZVBSlsv3iPAa5pFdT_Q2tAVNCKq6TREr2Hp8f3QG6KB-zx0WSmEnSTUX5hg1hUmwYs';

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
