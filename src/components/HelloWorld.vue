<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <button class="btn center-block login_btn" ><router-link to="/about">Commencer!</router-link></button>
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.login_btn{
  color: #090b0b;
  cursor: pointer;
  background-color: #fcb821;
}
</style>
