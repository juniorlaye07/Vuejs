<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/delmaslogo.png">
    <HelloWorld msg="Bienvenue! à JA Delmas"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
