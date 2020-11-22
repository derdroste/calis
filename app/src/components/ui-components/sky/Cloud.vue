<template>
    <v-card
        :style="{
        border: `thin solid ${$vuetify.theme.themes.light.sky}`
        }"
            max-width="600"
            outlined
            class="cloud mx-auto my-4"
            tile
    >
        <slot />
    </v-card>
</template>

<script>
    export default {
        name: "Cloud"
    }
</script>

<style lang="scss">
    .cloud {
        background-color: transparent !important;

        .v-card__title {
            color: var(--sky);
        }

        .v-list-item__title,
        .v-list-item__subtitle {
            color: var(--sky) !important;
        }

        .v-avatar {
            width: 110px !important;
            height: 110px !important;

            @media (min-width: 772px) {
                width: 164px !important;
                height: 164px !important;
            }
        }
    }
</style>