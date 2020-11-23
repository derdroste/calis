<template>
    <v-card
        :style="{
        border: `thin solid ${$vuetify.theme.themes.light.wood}`,
        background: $vuetify.theme.themes.light.wenge
        }"
            max-width="600"
            outlined
            class="cloud mx-auto my-4"
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

        .v-card__title {
            color: var(--gold);
        }

        .v-card__text {
            color: var(--wood) !important;
        }

        .v-list-item__title,
        .v-list-item__subtitle {
            color: var(--wood) !important;
        }

        .v-avatar {
            width: 110px !important;
            height: 110px !important;

            @media (min-width: 772px) {
                width: 164px !important;
                height: 164px !important;
            }
        }

        .v-overlay {
            .v-btn {
                background-color: var(--gold) !important;
            }
        }
    }
</style>