<template>
<button class="toggle-srce" @click="toggle">
<Srce class="toggle-srce__icon" :class="iconClasses" /></button>
</template>

<script>
import Srce from "./Srce.vue";
export default{
    name : "ToggleSrce",
    components : {
        Srce
    },
    data() {
        return{
        favorited: false,
    };
},
    methods: {
        toggle(){
            this.favorited = !this.favorited;
        }
    }

}
</script>

<style scoped>

.toggle-srce {
    height:40px;
    width:40px;
    padding-top:20px;
    padding-bottom:0px;
    font-size: 20px;
    position: relative;
    background:none;
    border:none;
}
.toggle-srce__icon{
    font-size: 20px;
    position: relative;
}
</style>