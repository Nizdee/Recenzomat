<template>
    <form>
        <b-field label="Ime filma">
            <b-input></b-input>
        </b-field>
        <b-field horizontal label="Vaša recenzija">
            <b-input type="textarea"></b-input>
        </b-field>
        <b-field label="Ocjena">
            <b-slider size="is-medium" :min="0" :max="10">
                <template v-for="val in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
                    <b-slider-tick :value="val" :key="val">{{ val }}</b-slider-tick>
                </template>
            </b-slider>
        </b-field>
        <b-field label="Zabilježite datum gledanja">
        <b-datepicker :focused-date="date"
            :first-day-of-week="1"
            placeholder="Kliknite za selekciju">

        </b-datepicker>
    </b-field>
        <b-button rounded type="submit">Dodaj recenziju</b-button>
    </form>
    
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

</style>
