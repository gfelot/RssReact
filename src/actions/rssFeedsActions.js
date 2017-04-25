import axios from 'axios'

const RootURL = "http://localhost:8080"

/*
** Get all RSS Feed for a certain User
*/

export const RSS_FEED_FETCH = 'RSS_FEED_FETCH'
export const RSS_FEED_FETCH_SUCCESS = 'RSS_FEED_FETCH_SUCCESS'
export const RSS_FEED_FETCH_FAIL = 'RSS_FEED_FETCH_FAIL'

export function rssFeedFetch() {
  const request = axios.get(`${RootURL}/feeds`) //miss some headers and other...

  return {
    type: RSS_FEED_FETCH,
    payload: request
  }
}

export function rssFeedFetchSuccess(rssFeed) {
  return {
    type: RSS_FEED_FETCH_SUCCESS,
    payload: rssFeed
  }
}

export function rssFeedFetchFail(error) {
  return {
    type: RSS_FEED_FETCH_FAIL,
    payload: error
  }
}

/*
** Delete a unique (:id) RSS Feed for a certain User
*/

export const RSS_CHANNEL_DELETE = 'RSS_CHANNEL_DELETE'
export const RSS_CHANNEL_DELETE_SUCCESS = 'RSS_CHANNEL_DELETE_SUCCESS'
export const RSS_CHANNEL_DELETE_FAIL = 'RSS_CHANNEL_DELETE_FAIL'

export function rssChannelDelete(id) {
  const request = axios.delete(`${RootURL}/feeds/${id}`) //miss some headers and other...

  return {
    type: RSS_CHANNEL_DELETE,
    payload: request
  }
}

export function rssChannelDeleteSuccess(rssChannel) {
  return {
    type: RSS_CHANNEL_DELETE_SUCCESS,
    payload: rssChannel
  }
}

export function rssChannelDeleteFail(error) {
  return {
    type: RSS_CHANNEL_DELETE_FAIL,
    payload: error
  }
}

/*
** Add a RSS Channel for a certain User
*/

export const RSS_CHANNEL_ADD = 'RSS_CHANNEL_ADD'
export const RSS_CHANNEL_ADD_SUCCESS = 'RSS_CHANNEL_ADD_SUCCESS'
export const RSS_CHANNEL_ADD_FAIL = 'RSS_CHANNEL_ADD_FAIL'

export function rssChannelAdd(channelData) {
  const request = axios.post(`${RootURL}/feeds/add`, { data: channelData }) //miss some headers and other...

  return {
    type: RSS_CHANNEL_ADD,
    payload: request
  }
}

export function rssChannelAddSuccess(rssChannel) {
  return {
    type: RSS_CHANNEL_ADD_SUCCESS,
    payload: rssChannel
  }
}

export function rssChannelAddFail(error) {
  return {
    type: RSS_CHANNEL_ADD_FAIL,
    payload: error
  }
}

/*
** Get a unique (:id) RSS Channel for a certain User
*/

export const RSS_CHANNEL_FETCH = 'RSS_CHANNEL_FETCH'
export const RSS_CHANNEL_FETCH_SUCCESS = 'RSS_CHANNEL_FETCH_SUCCESS'
export const RSS_CHANNEL_FETCH_FAIL = 'RSS_CHANNEL_FETCH_FAIL'

export function rssChannelFetch(channelId) {
  const request = axios.get(`${RootURL}/feeds/${channelId}`) //miss some headers and other...

  return {
    type: RSS_CHANNEL_FETCH,
    payload: request
  }
}

export function rssChannelFetchSuccess(rssChannel) {
  return {
    type: RSS_CHANNEL_FETCH_SUCCESS,
    payload: rssChannel
  }
}

export function rssChannelFetchFail(error) {
  return {
    type: RSS_CHANNEL_FETCH_FAIL,
    payload: error
  }
}

/*
** Get info of an articles (:id) from a RSS Channel for a certain User
*/

export const RSS_ITEM_FETCH = 'RSS_ITEM_FETCH'
export const RSS_ITEM_FETCH_SUCCESS = 'RSS_ITEM_FETCH_SUCCESS'
export const RSS_ITEM_FETCH_FAIL = 'RSS_ITEM_FETCH_FAIL'

export function rssItemFetch(channelId, itemId) {
  const request = axios.get(`${RootURL}/feeds/${channelId}/item/${itemId}`) //miss some headers and other...

  return {
    type: RSS_ITEM_FETCH,
    payload: request
  }
}

export function rssItemFetchSuccess(rssItem) {
  return {
    type: RSS_ITEM_FETCH_SUCCESS,
    payload: rssItem
  }
}

export function rssItemFetchFail(error) {
  return {
    type: RSS_ITEM_FETCH_FAIL,
    payload: error
  }
}
