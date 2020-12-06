<template>
    <div class="search">
        <input type="text" name="filmsearch" placeholder="Unesite ime filma" v-model="query">
        <button v-on:click="handleSearch">Traži</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            query:''
        }
    },
    methods:{
        handleSearch(){
            if(this.query=="") {
                alert("niste unijeli naslov")
            }
            else{
                this.$emit('SearchRequested', this.query);
            }
        }
    }
}
</script>

<style scoped>
.search button{
padding:15px;
width:125px;
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
.search input[type=text]{
    padding: 15px;
    width: 500px;
    border-radius: 10px;
    padding-right: 20px;
}
.search p{
    padding-bottom: 20px;
}
</style>