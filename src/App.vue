<template>
  <div id="app">
    
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <h2><b>Recenzomat</b></h2>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <div class="container">
    <Recenzija msg="Dobrodošli na početnu stranicu.Unesite prvu recenziju"/>
    </div>
    <div class="container">
      <h2><b>Pogledajte tuđe recenzije</b></h2>
    </div>
    <div class="columns is-4-desktop">
      <div class="column">
        <img src="./assets/drive.jpg">
        <p><b>Korisnik:</b>Ivan Ivanec</p>
        <p><b>Ocjena:</b>9</p>
        <p><b>Recenzija:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="column">
        <img src="./assets/drive.jpg">
        <p><b>Korisnik:</b>Ivan Ivanec</p>
        <p><b>Ocjena:</b>9</p>
        <p><b>Recenzija:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Recenzomat</strong> Student - Denis Tišljar
        </p>
      </div>
    </footer>
    
  </div>
  
</template>

<script>
import Recenzija from './components/Recenzija.vue'

export default {
  name: 'App',
  components: {
    Recenzija
  }
}
</script>

<style scoped>
#app {
  height:100%;
}
div.container{
  text-align: center;
  padding: 12px;
}
div.column{
  text-align: center;
  padding: 50px;
}
</style>
