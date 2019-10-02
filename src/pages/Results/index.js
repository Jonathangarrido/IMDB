import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import queryString from 'query-string'

import { searchMovie } from '../../redux/actions/search'

function Results({ location }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const { movieName } = queryString.parse(location.search)
    // console.log('movieName:', movieName)
    dispatch(searchMovie({ movieName }))
  })

  return (
    <Container>
      results
    </Container>
  )
}

export default Results
