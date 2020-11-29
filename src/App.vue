<template>
  <div id="app">
    <header>
      <section>
        <div class="logo">
        <h2><b>Recenzomat</b></h2>
        </div>
        <div class="login">
          <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/">About</router-link>
          </div>
          <router-view/>  
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
        </div>
      </section>
    </header>
    
    <div class="appcontainer">
    <div class="container">
    <Recenzija msg="Dobrodošli na početnu stranicu.Unesite prvu recenziju"/>
    </div>
    <div>
    </div>
    <div class="naslov">
    <h2><b>Pogledajte tuđe recenzije</b></h2>
    </div>
    <div class="flexcontainer">
      
    
    <div class="columns is-4-desktop">
      <div class="column">
        <img width="30%" height="30" src="./assets/drive.jpg">
        <p><b>Korisnik:</b>Ivan Ivanec</p>
        <p><b>Ocjena:</b>9</p>
        <p><b>Recenzija:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="column">
        <img width="30%" height="30" src="./assets/drive.jpg">
        <p><b>Korisnik:</b>Ivan Ivanec</p>
        <p><b>Ocjena:</b>9</p>
        <p><b>Recenzija:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
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
  color:#9ab;
  background-color: #363636;
}
div.appcontainer{
  width: 1100px;
  margin: 0 auto;
}
div.naslov{
  margin: 0 auto;
  text-align: center;
}
div.container{
  background-color: #363636;
  text-align: center;
  padding: 12px;
  max-width:1076px;
}
div.column{
  text-align: center;
  padding: 50px;
}
div.flexcontainer{
  display:flex;
  flex-wrap: wrap;
  background-color: #363636;
  text-align: center;
  padding: 12px;
}
div.logo{
  margin: 25px 0 0;
  float:left;
  position:relative;
}
div.login{
  margin: 25px 0 0;
  float:right;
  position:relative;
}
footer{
  background-color:#14181c;
}
header{
  background-color:#14181c;
  height:100px;
}
section{
  width: 1100px;
  height: 72px;
  margin: 0 auto;
  position: relative;
}
h2{
  color:#9ab;
  font-size:30px;
}
</style>
