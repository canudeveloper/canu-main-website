import axios from 'axios'

export function strapi(path) {
  return process.env.NEXT_PUBLIC_STRAPI_URL + path
}

export default async function get(path) {
  return (await axios(strapi(path))).data
}
