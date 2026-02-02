const app = Vue.createApp({
    data(){
        return{
            contenido: '',
            grupo: '',
            empresa: '',
            albums: [],
            mostrarTabla: true
            }   
    },
    methods: {
        agregarAlbum() {
            if (this.contenido && this.grupo && this.empresa) {this.albums.push({
                    contenido: this.contenido,
                    grupo: this.grupo,
                    empresa: this.empresa
                });

                this.contenido = '';
                this.grupo = '';
                this.empresa = '';
            }
        },
        eliminarAlbum(index) {
            this.albums.splice(index, 1);
        },
        ocultarTabla() {
            this.mostrarTabla = !this.mostrarTabla;
        }
    },
    computed: {
        totalAlbums() {
            return this.albums.length;
        },
        empresasUnicas() {
            return new Set(this.albums.map(a => a.empresa)).size;
        }
    }
});

const app1 = app.mount('#componente')