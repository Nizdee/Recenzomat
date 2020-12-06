<template>
      <div>
        <transition name="fade" appear>
        <div v-if="isVisibility" class="overlay">
          
          <div class="popup">
            <p>Korisničko ime:</p>
            <b-field>
            <b-input placeholder="Korisničko ime" type="username" id="username" required></b-input>
            </b-field>
            <p>Lozinka:</p>
            <b-field>
            <b-input placeholder="Lozinka" type="password" id="password" required></b-input>
            </b-field>
            <div class="izlaz"><button class="button" @click.prevent="toggleModal">Izađi bez logina</button></div>
            <button class="button" @click.prevent="toggleModal">Ulogiraj me</button>
          </div>
        </div>
        </transition>
        <button class="button" @click.prevent="toggleModal">Login</button>
      </div>
</template>

<script>
export default {
  data(){
    return {
      isVisibility: false
    }
  },
  methods: {
    toggleModal() {
      this.isVisibility = !this.isVisibility;
    }
  }
};
</script>

<style scoped>
.izlaz{
  float:right;
}
.overlay{
  position:fixed;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display:flex;
  align-items: center;
  justify-content: center;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  border-radius: 16px;
  padding: 25px;}
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

   .fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}

</style>