<template>
<section>
    <br /> 
        <label for="title">
        <b-field>
            <b-input placeholder="Naslov filma" type="text" id="title" required></b-input>
        </b-field>
        </label>
        <br /> 
        <label for="redatelj">
        <b-field>
            <b-input placeholder="Ime redatelja"
              type="text" id="redatelj"
              required>
            </b-input>
        </b-field>
        </label>
        <br /> 
        <label for="ocjena">
        <b-field>
            <b-input placeholder="Vaša ocjena"
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
            <b-input type="textarea"
                placeholder="Ovdje unesite svoje mišljenje o filmu"
                id="recenzija"
                required>
            </b-input>
        </b-field>
        </label>
    </section>
</template>

<script>
export default {
    data() {
        return{

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

.form-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}
.checkbox{
  width:900px;
}
.select .input:focus{
  border-color:limegreen;
}
</style>
