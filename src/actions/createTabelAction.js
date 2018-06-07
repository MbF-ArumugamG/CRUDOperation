import { ADD_POST } from './types';

export function CreateTable(user) {
  return {
    type: ADD_POST,
    user
  }
}