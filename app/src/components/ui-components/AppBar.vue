<template>
    <v-app-bar
            app
            color="wenge"
            :collapse="!collapseOnScroll"
            :collapse-on-scroll="collapseOnScroll"
            src="../../assets/2.jpg"
            style="z-index: 9999"
    >
        <img class="calis-logo" src="../../assets/calis.svg" alt="calis" />

        <v-spacer></v-spacer>
        <v-btn color="transparent" rounded small class="menu-button"  v-if="!$store.state.user.isLoggedIn">
            <v-avatar
                    size="28"
                    color="gold"
            >
                <v-icon light>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
        </v-btn>
        <router-link to="/profile" v-if="$store.state.user.isLoggedIn">
            <v-btn color="transparent" rounded small class="menu-button">
                <v-avatar
                        v-if="$store.state.user.information.image === '' || $isNil($store.state.user.information.image)"
                        size="30"
                        color="gold"
                >
                    <v-icon light>
                        mdi-account-circle
                    </v-icon>
                </v-avatar>
                <v-avatar
                        v-else
                        size="36"
                        color="gold"
                >
                 <v-img :src="$store.state.user.information.image"></v-img>
                </v-avatar>
            </v-btn>
        </router-link>
        <v-menu
                bottom
                left
                :close-on-content-click="true"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent"
                       rounded small class="menu-button"
                       v-bind="attrs"
                       v-on="on">
                    <v-icon color="gold">
                        mdi-dots-vertical
                    </v-icon>
                </v-btn>
            </template>
            <v-list color="gold">
                <v-list-item :ripple="false" @click="logUserOut">
                    <v-list-item-action :ripple="false">
                        <v-icon>mdi-account-cancel-outline</v-icon>
                    </v-list-item-action>
                    Logout
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
        data: () => ({
            collapseOnScroll: true,
        }),
        methods: {
            logUserOut() {
                localStorage.removeItem("jwt");
                localStorage.removeItem("vuex");
                this.$store.commit('user/resetUser');
                this.$store.commit('user/isLoggedIn', false);
                this.$router.push("/");
            }
        }
    }
</script>

<style lang="scss" >
    .v-list-item__action {
        color: var(--wood);
        font-weight: 500;
    }

    .v-list-item {
        .v-list-item__action {
            color: var(--wenge);
            margin-right: 10px !important;
        }
    }
</style>