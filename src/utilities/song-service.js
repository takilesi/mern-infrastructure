// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as songAPI from './song-api';

export async function createSong(task) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entry = await songAPI.createSong(task);

    return entry; 
}

export function readSong() {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entries = songAPI.readSong();

    return entries; 
}

export async function updateSong(data) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entry = await songAPI.updateSong(data);

    return entry; 
}

export async function deleteSong(data) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const entry = await songAPI.deleteSong(data);

    return entry; 
}