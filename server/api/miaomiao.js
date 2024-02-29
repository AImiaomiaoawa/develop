import axios from 'axios'
export default defineEventHandler(async (event) => {

  // // handle query params
  // const {name} = getQuery(event)

  // // handle post data
  // const { age } = await useBody(event)

  // return {
  //   message: `Hello, name ! You are 18 years old.`
  // }

  // api call with private key
  const query = await $fetch('https://6a34b00d-bc86-4b94-b5de-8a3e989cdfae.mock.pstmn.io/get?test=222')
  
  return query
})