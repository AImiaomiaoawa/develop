<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam minima unde nemo harum quam maxime optio quos corrupti. Eum sapiente facere nemo, laborum ullam non cum fuga quas eveniet harum molestiae minus atque vel ratione illo quia, iure commodi dicta porro excepturi quam. Facere, commodi corrupti ipsam neque totam reprehenderit laboriosam laborum veniam est quo, repellat saepe impedit labore?</p>
    <p>api response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>

<script setup>
  // // // below is working and can be used for debugging
  // const { data } = await useFetch('https://6a34b00d-bc86-4b94-b5de-8a3e989cdfae.mock.pstmn.io/get?test=222')
 
  // const { data } = await useFetch('/api/miaomiao')
  const q = await useFetch('/api/miaomiao') 
  const data = q.data
  console.log(data)
  console.log(q)
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: {age: 30}
  // })
</script>