<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada select</h1>
    </div>
    <FaB />
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default{

    components:{
        FaB : defineAsyncComponent ( () => import('../components/FaB.vue'))
    }
}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>