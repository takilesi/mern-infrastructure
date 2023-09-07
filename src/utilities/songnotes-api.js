import * as sendrequest from './send-request'
const BASE_URL = 'http://localhost:3001/api/songnotes';

export function createSongNotes(songNotesData) {
  return sendrequest.sendPostRequest(`${BASE_URL}/createsongnotes`, songNotesData);
}

// copy above / fix .... 

export function readSongNotes(songNotesData) {
  return sendrequest.sendGetRequest(`${BASE_URL}/readsongnotes`, songNotesData);
}

export function updateSongNotes(songNotesData) {
  return sendrequest.sendPutRequest(`${BASE_URL}/updatesongnotes`, songNotesData);
}

export function deleteSongNotes(songNotesData) {
  return sendrequest.sendDeleteRequest(`${BASE_URL}/deletesongnotes`, songNotesData);
}