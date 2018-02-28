import { combineReducers } from 'redux'
//import currentPlaylist from './currentPlaylist'
import search from './searchReducer'
import visibilityFilter from './visibilityFilter'
 
export default combineReducers({
  search,
//  currentPlaylist,
  visibilityFilter
})