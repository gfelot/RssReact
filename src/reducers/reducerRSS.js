import {
  //Read Fead
  RSS_FEED_FETCH,
  RSS_FEED_FETCH_SUCCESS,
  RSS_FEED_FETCH_FAIL,
  //Add New Channel
  RSS_CHANNEL_ADD,
  RSS_CHANNEL_ADD_SUCCESS,
  RSS_CHANNEL_ADD_FAIL,
  //Get Specific Channel
  RSS_CHANNEL_FETCH,
  RSS_CHANNEL_FETCH_SUCCESS,
  RSS_CHANNEL_FETCH_FAIL,
  //Delete Specific Channel
  RSS_CHANNEL_DELETE,
  RSS_CHANNEL_DELETE_SUCCESS,
  RSS_CHANNEL_DELETE_FAIL,
  //Get Article from Specific Channel
  RSS_ITEM_FETCH,
  RSS_ITEM_FETCH_SUCCESS,
  RSS_ITEM_FETCH_FAIL
} from '../actions/rssFeedsActions'

const INITIAL_STATE = {
  rssFeed: {
    feed: [],
    error: null,
    loading: false
  },
  rssChannel: {
    channel: null,
    error: null,
    loading: false
  },
  addChannel: {
    article: null,
    error: null,
    loading: false
  },
  deleteChannel: {
    channel: null,
    error: null,
    loading: false
  },
  rssItem: {
    article: null,
    error: null,
    loading: false
  }
}

export default function(state = INITIAL_STATE, action) {
  let error

  switch (action.type) {
    case RSS_FEED_FETCH:
      return {
        ...state,
        rssFeed: {
          feed: [],
          error: null,
          loading: true
        }
      };

    case RSS_FEED_FETCH_SUCCESS:
      return {
        ...state,
        rssFeed: {
          feed: action.payload,
          error: null,
          loading: false
        }
      };

    case RSS_FEED_FETCH_FAIL:
      error = action.payload || {message: action.payload.message}
      return {
        ...state,
        rssFeed: {
          feed: [],
          error: error,
          loading: false
        }
      };

    case RSS_CHANNEL_FETCH:
      return {
        ...state,
        rssChannel: {
          // create-react-app supports array spread, but not object spread destructuring.
          channel: Object.assign({}, state.rssChannel),  
          error: null,
          loading: true
        }
      };

    case RSS_CHANNEL_FETCH_SUCCESS:
      return {
        ...state,
        rssChannel: {
          channel: action.payload,
          error: null,
          loading: false
        }
      };

    case RSS_CHANNEL_FETCH_FAIL:
      error = action.payload || {message: action.payload.message}
      return {
        ...state,
        rssChannel: {
          channel: null,
          error: error,
          loading: false
        }
      };

    case RSS_CHANNEL_ADD:
      return {
        ...state,
        addChannel: {
          // create-react-app supports array spread, but not object spread destructuring.
          channel: Object.assign({}, state.addChannel),  
          error: null,
          loading: true
        }
      };

    case RSS_CHANNEL_ADD_SUCCESS:
      return {
        ...state,
        addChannel: {
          channel: action.payload,
          error: null,
          loading: false
        }
      };

    case RSS_CHANNEL_ADD_FAIL:
      error = action.payload || {message: action.payload.message}
      return {
        ...state,
        addChannel: {
          channel: null,
          error: error,
          loading: false
        }
      };

    case RSS_CHANNEL_DELETE:
      return {
        ...state,
        deleteChannel: {
          // create-react-app supports array spread, but not object spread destructuring.
          channel: Object.assign({}, state.deleteChannel),  
          error: null,
          loading: true
        }
      };

    case RSS_CHANNEL_DELETE_SUCCESS:
      return {
        ...state,
        deleteChannel: {
          channel: action.payload,
          error: null,
          loading: false
        }
      };

    case RSS_CHANNEL_DELETE_FAIL:
    error = action.payload || {message: action.payload.message}
      return {
        ...state,
        deleteChannel: {
          channel: null,
          error: error,
          loading: false
        }
      };

    case RSS_ITEM_FETCH:
      return {
        ...state,
        addChannel: {
          article: state.rssItem,
          error: null,
          loading: true
        }
      };

    case RSS_ITEM_FETCH_SUCCESS:
      return {
        ...state,
        addChannel: {
          article: action.payload,
          error: null,
          loading: false
        }
      };

    case RSS_ITEM_FETCH_FAIL:
    error = action.payload || {message: action.payload.message}
      return {
        ...state,
        addChannel: {
          article: null,
          error: error,
          loading: false
        }
      };

    default:
      return state;
  }
}
