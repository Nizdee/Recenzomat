<template>
  <div class="about">
    <h2><b>Dobrodošli na stranicu za recenzije</b></h2>
    <p>Na stranici možete pregledati postojeće javne recenzije</p>
    <p>ili spremati svoje vlastite recenzije!</p>
  
  <div class="recenzije">
    <Recenzija />

    <router-view/>
  </div>
  </div>
</template>

<script>

import Recenzija from '@/components/Recenzija.vue'

export default {
  name: 'Recenzije',
  components: {
    Recenzija
  }
}
</script>
