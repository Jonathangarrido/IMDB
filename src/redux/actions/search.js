import { SEARCH_MOVIE_START } from '../../consts/actionsTypes'

export const searchMovie = payload => {
  console.log('payload:', payload)
  return ({
    type: SEARCH_MOVIE_START,
    payload
  })
}