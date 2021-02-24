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