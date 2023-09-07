// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as songnotesAPI from './songnotes-api';

export async function createSongNotes({songNotes}) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entry = await songnotesAPI.createSongNotes({songNotes});

    return entry; 
}

export async function readSongNotes(data) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entry = await songnotesAPI.readSongNotes(data);

    return entry; 
}

export async function updateSongNotes(data) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entry = await songnotesAPI.updateSongNotes(data);

    return entry; 
}

export async function deleteSongNotes(data) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entry = await songnotesAPI.deleteSongNotes(data);

    return entry; 
}