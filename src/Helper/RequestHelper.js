import queryString from 'query-string'
import _ from 'lodash'
import axios from 'axios'

const DEFAULT_UNSPLASH_API_URL = 'https://api.unsplash.com'
const SEARCH_PHOTOS_API_URL = '/search/photos'
const ACCESS_KEY = 'f3b7c45dc4bb48cb5059ec6e1c138fdd300cef5031ec44ff8f018987098f44bb'
const DEFAULT_RETURNED_PAGE = 1
const DEFAULT_ITEMS_PER_PAGE = 3

export const searchPhotos = async (query) => {
  if (_.isEmpty(query)) {
    console.error('Missing query term')
    return
  }

  const defaultSearchPhotoParams = {
    page: DEFAULT_RETURNED_PAGE,
    per_page: DEFAULT_ITEMS_PER_PAGE,
    query,
  }

  const response = await getRequestHelper(SEARCH_PHOTOS_API_URL, defaultSearchPhotoParams)
  return response
}

export const getRequestHelper = async (api = SEARCH_PHOTOS_API_URL, params) => {
  try {
    let url = DEFAULT_UNSPLASH_API_URL + api
    const response = await axios.get(url, {
      params,
      headers: {
        'Authorization': 'Client-ID ' + ACCESS_KEY,
      }
    })

    const results = _.get(response, 'data.results')
    if (Array.isArray(results)) {
      return results
    } else {
      return _.get(response, 'data.errors[0]')
    }
  } catch (error) {
    return error
  }
}
