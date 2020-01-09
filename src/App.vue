<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #090b0b;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #090b0b;
}

#nav a.router-link-exact-active {
  color: #ffba21;
}
</style>
