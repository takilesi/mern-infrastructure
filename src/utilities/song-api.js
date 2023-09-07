import * as sendrequest from './send-request'
const BASE_URL = 'http://localhost:3001/api/song';

export function createSong(songData) {
  return sendrequest.sendPostRequest(`${BASE_URL}/createsong`, songData);
}

// copy above / fix .... 

export function readSong() {
  return sendrequest.sendGetRequest(`${BASE_URL}/`);
}

export function updateSong(songData) {
  return sendrequest.sendPutRequest(`${BASE_URL}/`, songData);
}

export function deleteSong(songData) {
  return sendrequest.sendDeleteRequest(`${BASE_URL}/`, songData);
}