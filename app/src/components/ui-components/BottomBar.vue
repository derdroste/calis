<template>
    <v-bottom-navigation
            style="z-index: 9999"
            :background-color="$vuetify.theme.themes.light.wenge"
            light
            shift
            grow
            fixed
            v-if="$store.state.user.isLoggedIn"
    >
        <v-btn x-large>
            <span>Create</span>
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn x-large>
            <span>Discover</span>
            <v-icon>mdi-crosshairs</v-icon>
        </v-btn>
        <v-btn x-large @click="toggleFullScreen">
            <span>Fullscreen</span>
            <v-icon>mdi-fullscreen</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: "BottomBar",
    methods: {
        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    }
}

</script>

<style scoped>

</style>