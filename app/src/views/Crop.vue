<template>
    <v-container>
        <cloud>
            <crop-images
                    :img="$store.state.manipulate.uncroppedImage"
            ></crop-images>
        </cloud>
    </v-container>
</template>

<script>
    import CropImages from "../components/ui-components/CropImages";
    import Cloud from "../components/ui-components/sky/Cloud";

    export default {
        name: "Crop",
        components: {
            Cloud,
            CropImages
        }
    }
</script>

<style scoped>

</style>