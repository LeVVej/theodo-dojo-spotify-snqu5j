import { SavedTrack, SpotifyType } from "spotify-types";

const apiToken: string = 'BQCPxWndiLXGBZZ_TypFX05X01edLYTFF0z_HUIbBKu64miA3-ZM0KJ6rdES47hY1hTNMsOHV2-Z0mrFXSKhvuU6u9EszKPLsSV4VjfeBFLEzomXe1RztaFTJiildNZVH8x_P5MXhSNotujFTflj6EzGFlttymACyJ9wq1Wx6KbhzHojxff2x06m8FToNNQJim1yT3E4iTEo8OZXuvun2g';

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
