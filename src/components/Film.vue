<template>
    <div class="new">
    <div v-bind="films" v-if="films.Error!='Movie not found!'">
        <img :src="films.Poster">
        <p>Film name : {{films.Title}}</p>
        <p>Film Director : {{films.Director}}</p>
        <p>Film IMDB Score : {{films.imdbRating}} / 10</p>
    </div>
    <div v-bind="films" v-if="films.Error=='Movie not found! '">
        <h2>{{films.Error}}</h2>
    </div>
    </div>               
</template>

<script>
export default {
    props:['films']
}
</script>
<style scoped>
.new img{
    padding : 25px;
    height: 20%;
    width: 20%;
}
</style>