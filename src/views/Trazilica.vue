<template>
  <div class="trazilica">
    <h2><b>Pretražite film</b></h2>
    <p>Nađite autora filma i prosječnu ocjenu na IMDB-u</p>
    <Search v-on:SearchRequested="handleSearch"></Search>
    <Film v-bind:films=films></Film>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Film from '@/components/Film.vue'
export default {
  name : 'trazilica',
  components:{Search , Film},

  data() {
    return {
      films:[]
    }
  },
  methods:{
    handleSearch(query){
      this.films=[];
      var url = 'http://www.omdbapi.com/?t='+query+'&apikey=52d209ff';
    fetch(url)
    .then((res) => { return res.json() } )
      .then((res) =>{
        this.films=res;
      console.log(this.films.Error)
      })
    }
    },
    created(){
      fetch('http://www.omdbapi.com/?t=star&apikey=52d209ff')
      .then((res) => { return res.json() } )
      .then((res) =>{
        this.films=res;
      console.log(this.films.Error)
      })
    }
  }

</script>

<style scoped>
h2{
  color:#9ab;
  font-size:30px;
}
p{padding-bottom:20px;}
</style>