import ACTION_TYPES from './ImagesSection.actionTypes'

const INIT_STATE = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  images: null,
  currentPage: null,
}

export default function imagesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      }
    case ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        images: action.payload.results,
        currentPage: action.payload.currentPage,
      }
    case ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      }
    default:
      return state
  }
}
