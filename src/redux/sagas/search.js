import { takeLatest } from 'redux-saga/effects'
import {
  SEARCH_MOVIE_START,
  // SEARCH_MOVIE_ERROR,
  // SEARCH_MOVIE_COMPLETE
} from '../../consts/actionsTypes'

export function searchMovie({ payload }) {
  console.log('searchMovie PPPPPP')
  try {
    console.log('llamo')
  } catch (error) {
    
  }
} 


export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie)
}