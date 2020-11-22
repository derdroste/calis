<template>
    <v-app-bar
            app
            color="wood"
            :collapse="!collapseOnScroll"
            :collapse-on-scroll="collapseOnScroll"
            src="../../assets/2.jpg"
    >
        <img class="calis-logo" src="../../assets/calis.svg" alt="calis" />

        <v-spacer></v-spacer>
        <v-btn color="transparent" rounded small class="menu-button"  v-if="!$store.state.user.isLoggedIn">
            <v-avatar
                    size="30"
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
                        size="30"
                        color="gold"
                >
                    <v-icon light>
                        mdi-account-circle
                    </v-icon>
                </v-avatar>
            </v-btn>
        </router-link>
        <v-menu
                bottom
                left
                :close-on-content-click="true"
                v-if="$store.state.user.isLoggedIn"
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
                <v-list-item  @click="logUserOut">
                    <v-list-item-action>
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

<style lang="scss" scoped>
    .v-list-item__action {
        color: var(--wood);
        font-weight: 500;
    }

    .v-list-item {
        .v-list-item__action {
            margin-right: 10px !important;
        }
    }
</style>