<template>
    <v-container>
        <cloud>
            <v-row
                    align="end"
                    class="fill-height mx-0"
            >
                <v-col
                        align-self="start"
                        class="pa-0"
                        cols="12"
                >
                    <v-avatar
                            class="profile"
                            color="grey"
                            tile
                    >
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                </v-col>
                <v-col class="py-0 px-0">
                    <v-list-item
                            color="rgba(0, 0, 0, .4)"
                            dark
                    >
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                {{$store.state.user.information.name}}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{$store.state.user.information.email}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
        </cloud>
    </v-container>
</template>

<script>
    import Cloud from "../components/ui-components/sky/Cloud";
    export default {
        name: "Profile",
        components: {Cloud}
    }
</script>

<style scoped>

</style>