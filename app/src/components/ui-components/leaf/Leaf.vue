<template>
    <v-card
        :style="{
        background: $vuetify.theme.themes.light.forest,
        border: `thin solid ${$vuetify.theme.themes.light.olive}`
        }"
        max-width="600"
        outlined
        class="leaf mx-auto my-4 px-6 py-4"
        shaped
    >
        <slot></slot>
    </v-card>
</template>

<script>
    export default {
        name: "Leaf"
    }
</script>

<style lang="scss" scoped>
    .leaf {
    }
</style>