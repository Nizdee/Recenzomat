<template>
<div class="recenzija">
<div class="add-recenzija">
<section>
    <br /> 
        <label for="title">
        <b-field>
            <b-input placeholder="Naslov filma" v-model.lazy="recenzija.title" type="text" id="title" required></b-input>
        </b-field>
        </label>
        <br /> 
        <label for="redatelj">
        <b-field>
            <b-input v-model.lazy="recenzija.director" placeholder="Ime redatelja"
              type="text" id="redatelj"
              required>
            </b-input>
        </b-field>
        </label>
        <br /> 
        <label for="ocjena">
        <b-field>
            <b-input v-model.lazy="recenzija.grade" placeholder="Vaša ocjena"
                type="number"
                min="1"
                max="10"
                id="ocjena"
                required>
            </b-input>
        </b-field>
        </label>
        <br /> 
        <label for="recenzija">
        <b-field>
            <b-input type="textarea" v-model.lazy="recenzija.review"
                placeholder="Ovdje unesite svoje mišljenje o filmu"
                id="recenzija"
                required>
            </b-input>
        </b-field>
        </label>
    </section>
    </div>
    <div class="user-recenzija">
        <h2>Tvoja recenzija</h2>
        <hr style="color:gray;background-color:gray">
        <p>Naslov filma: {{recenzija.title}} </p>
        <p>Redatelj: {{recenzija.director}}</p>
        <p>Ocjena: {{recenzija.grade}}</p>
        <p>Recenzija: {{recenzija.review}}</p>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
          recenzija:{
            title:"",
            director:"",
            grade:"",
            review: "",
          }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
}
.user-recenzija{
  text-align: left;
  width: 90%;
  margin:0 auto;
  padding: 30px;
  border-color: #14181c;
  border: 1px;

}
h2{
  font-size:25px;
}
</style>
