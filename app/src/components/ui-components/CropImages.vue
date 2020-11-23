<template>
    <div class="px-4 py-4">
        <cropper
                :src="this.img"
                ref="cropper"
                :stencil-props="{minAspectRatio: $store.state.manipulate.minAspectRatio}"
        />
        <v-row class="px-2 mx-0">
            <v-spacer></v-spacer>
            <v-btn fab small @click="crop" class="my-4">
                <v-icon>mdi-check-outline</v-icon>
            </v-btn>
        </v-row>
    </div>
</template>

<script>
    import { Cropper } from 'vue-advanced-cropper';

    export default {
        components: {
            Cropper,
        },
        props: {
            img: {type: String, required: true}
        },
        data() {
            return {
                coordinates: {
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0,
                },
                image: null,
            };
        },
        methods: {
            async crop() {
                const { coordinates, canvas, } = this.$refs.cropper.getResult();
                this.coordinates = coordinates;
                this.image = canvas.toDataURL();
                await this.sendImageToServer();
            },
            async sendImageToServer() {
                try {
                    const token = localStorage.getItem('jwt');
                    let response = await this.$http.put("/api/user/me/img", {image: this.image}, { headers: {"x-auth-token" : token}});
                    let img = await response.data;
                    if (img) {
                        this.$store.commit(this.$store.state.manipulate.commit, img);
                        this.$router.go(-1);
                    }
                } catch (err) {
                    console.log(err.message);
                }
            }
        }
    }
</script>

<style lang="scss">
    .vue-advanced-cropper__background {
        border: 1px solid var(--wood);
    }
</style>