<template>
  <div id="app">
    <header>
      <section>
        <div class="logo">
        <h2><b>Recenzomat</b></h2>
        </div>
        <div class="login">
        <Modal />
        </div>
      </section>
    </header>
    
    <div class="appcontainer">
    <div class="container">
      <div class="routing">
        <router-link tag="a" to="/">Home</router-link> |
        <router-link tag="a" to="/Trazilica">Pretraži</router-link> |
        <router-link tag="a" to="/Recenzije">Vaše recenzije</router-link>
      </div>
      <router-view/>
    </div>
    <div>
    </div>
    <div class="naslov">
    <hr style="color:gray;background-color:gray">
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
        <ToggleSrce />
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
        <ToggleSrce />
        </div>
        </div>
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
        <ToggleSrce />
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
        <ToggleSrce />
      </div>
        </div>
        </div>

      <hr style="color:gray;background-color:gray">
    </div>

    

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
         Student - Denis Tišljar
        </p>
      </div>
    </footer>
    
  </div>
  
</template>

<script>
import Modal from "./components/Modal.vue";
import ToggleSrce from "./components/ToggleSrce.vue";

export default {
  name:"App",
  components:{
    Modal,
    ToggleSrce
  }

}

</script>

<style scoped>
body{
  background-color:#14181c;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
#app {
  color:#9ab;
  background-color: #363636;
  font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
  position: relative;

  justify-content: center;
  align-items: center;
  
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
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
  padding-left: 30px;
}
div.routing{
  margin: 0 auto;
  color:limegreen;
  padding-bottom: 30px;
}
.a{
  color:limegreen;
  cursor: pointer;
  display:inline;
}
footer{
  background-color: #363636;
  text-align: center;
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
.button{
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  border-radius:8px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  background-color: limegreen;
  color:white;
}
.modal-overlay {
  position:absolute;
  top:0;
  left: 0;
  right:0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

 .fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}
a{color:rgb(50,180,50);
font-size:22px;
font-weight: bold;}
a:hover{
  color:#9ab;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
.router-link{
  color:#9ab;
}
</style>
