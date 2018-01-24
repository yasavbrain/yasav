import { ADD_INTERLOCUTOR } from './types';

export function addInterlocutor(interlocutor) {
  return { type: ADD_INTERLOCUTOR, interlocutor: interlocutor }
}
