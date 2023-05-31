import { SavedTrack, SpotifyType } from "spotify-types";

const apiToken: string = 'BQCpjAlvTEygw7cAdA_PLYOP2fGLdlvqeKCAu9qEdT2IojcAMVTv2o91IiS1tXNpnFtUbnC78JZCpDnPPxQzyR2mV6fyZ5Gk1coRXK0YJuPjZ04ahIpLLH_gyjWF0bvHZgho98n7irFFpmog2SXpxZt3pV4rxTH-4IsYPLbycso875Xh0Pkjm36-RhMoU-O66bLC5E4P4Jjl82Jdi_qj_aKSVpo';

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
