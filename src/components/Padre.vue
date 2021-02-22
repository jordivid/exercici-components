<template>
    <div>
        <h2>{{mensaje}}</h2>
        <Hijo></Hijo>
    </div>
</template>


<script>
import Hijo from './../components/Hijo.vue'; 

export default {
    name: 'Padre',
    components: {
        Hijo
    },
    data() {
        return {
            mensaje: "Soc el pare"
        }
    }
}
</script>