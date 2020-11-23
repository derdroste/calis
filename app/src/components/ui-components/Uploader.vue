<template>
    <div class="profile-image-button">
        <v-row class="mx-0">
            <div class="profile-foto">
                <label for="profile-foto-camera">
                    <v-btn color="gold" fab v-if="$isMobile()" small>
                        <v-icon color="wenge" medium>
                            mdi-camera-outline
                        </v-icon>
                    </v-btn>
                </label>
                <image-uploader
                        id="profile-foto-camera"
                        :quality="0.8"
                        :autoRotate=true
                        outputFormat="verbose"
                        :preview=false
                        capture="camera"
                        accept="image/*"
                        :maxWidth="400"
                        @input="saveImage"
                ></image-uploader>
            </div>
            <div class="profile-foto">
                <label for="profile-foto-upload">
                    <v-btn color="gold" fab small>
                        <v-icon color="wenge" medium>
                            mdi-file-upload-outline
                        </v-icon>
                    </v-btn>
                </label>
                <image-uploader
                        id="profile-foto-upload"
                        :quality="0.8"
                        :autoRotate=true
                        outputFormat="verbose"
                        :preview=false
                        :capture="false"
                        accept="image/*"
                        :maxWidth="400"
                        @input="saveImage"
                ></image-uploader>
            </div>
        </v-row>
    </div>
</template>

<script>
    import ImageUploader from 'vue-image-upload-resize'

    export default {
        name: "Uploader",
        data() {
            return {
                overlay: false,
            }
        },
        props: {
          minAspectRatio: {type: Number, required: true},
          commit: {type: String, required: true}
        },
        components: {
          ImageUploader
        },
        methods: {
            saveImage(obj) {
             this.$store.commit('manipulate/setUncroppedImage', {img: obj.dataUrl, minAspectRatio: this.minAspectRatio, commit: this.commit});
             this.$router.push({name: 'Crop'});
            }
        }
    }
</script>

<style scoped>

</style>