/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios'

import errorhandler from './errorhandler'

export const api = axios.create({
  headers: {
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Max-Age': 86400
  },
  baseURL: 'your url'
})

export const getItems = (endpoint: string, params: any = {}) =>
  new Promise((resolve, reject) => {
    api
      .get(endpoint, { params })
      .then((response) => {
        resolve({ data: response.data, status: response.status })
      })
      .catch((error) => {
        reject(errorhandler(error))
      })
  })

export const getItem = (endpoint: string, id: string, params: any = {}) =>
  new Promise((resolve, reject) => {
    api
      .get(`${endpoint}/${id}`, { params })
      .then((response) => {
        resolve({ data: response.data, status: response.status })
      })
      .catch((error) => {
        reject(errorhandler(error))
      })
  })

export const createItem = (endpoint: string, data: any) =>
  new Promise((resolve, reject) => {
    api
      .post(endpoint, data)
      .then((response) => {
        resolve({ data: response.data, status: response.status })
      })
      .catch((error) => {
        reject(errorhandler(error))
      })
  })

export const updateItem = (endpoint: string, data: any = {}) =>
  new Promise((resolve, reject) => {
    api
      .put(endpoint, data)
      .then((response) => {
        resolve({ data: response.data, status: response.status })
      })
      .catch((error) => {
        reject(errorhandler(error))
      })
  })

export const patchItem = (endpoint: string, data: any = {}) =>
  new Promise((resolve, reject) => {
    api
      .patch(endpoint, data)
      .then((response) => {
        resolve({ data: response.data, status: response.status })
      })
      .catch((error) => {
        reject(errorhandler(error))
      })
  })

export const deleteItem = (endpoint: string, data: any = {}) =>
  new Promise((resolve, reject) => {
    api
      .delete(endpoint, data)
      .then((response) => {
        resolve({ data: response.data, status: response.status })
      })
      .catch((error) => {
        reject(errorhandler(error))
      })
  })
