<template>
    <v-container>
        <leaf>
            <v-card-title>Welcome!</v-card-title>
            <v-form
                    @submit.prevent="loginUser"
            >
                <v-text-field
                        autocomplete="off"
                        type="text"
                        id="email"
                        label="Email"
                        v-model="login.email"
                        class="leaf-input mx-4"
                        :rules="rules.email"
                />
                <v-text-field
                        autocomplete="off"
                        type="password"
                        id="password"
                        label="Password"
                        v-model="login.password"
                        class="leaf-input mx-4"
                        :rules="rules.password"
                />
                <v-card-text>Don't have an account?
                    <router-link to="/register">click here</router-link>
                </v-card-text>
                <v-btn
                        type="submit"
                        class="mx-4 my-2"
                        outlined
                        color="gold"
                >Sign in</v-btn>
            </v-form>
        </leaf>
        <v-snackbar
                v-model="snackbar"
                rounded="pill"
                color="sunlight"
                bottom
                class="pb-10"
        >
            {{errorText}}

            <template v-slot:action="{ attrs }">
                <v-btn
                        color="wenge"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
    import Leaf from "../ui-components/leaf/Leaf";
    export default {
        name: "Login",
        components: {Leaf},
        data() {
            return {
                login: {
                    email: "",
                    password: "",
                },
                rules: {
                    email: [
                        value => !!value || 'Required',
                        value => (value || '').length <= 100 || 'Max 100 characters',
                        value => {
                            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            return pattern.test(value) || 'Invalid e-mail.'
                        },
                    ],
                    password: [
                        value => !!value || 'Required',
                        value => (value || '').length <= 100 || 'Max 100 characters',
                        value => (value || '').length >= 8 || 'Min 8 characters'
                    ],
                },
                snackbar: false,
                errorText: ''
            };
        },
        mounted: function () {
            let token = localStorage.getItem("jwt");
            if (token) {
                this.$store.commit('user/isLoggedIn', true);
                this.$router.push("/home");
            }
        },
        methods: {
            async loginUser() {
                try {
                    let response = await this.$http.post("/api/auth", this.login);
                    let token = response.data.token;
                    localStorage.setItem("jwt", token);
                    this.$store.commit('user/setInformation', {
                        _id: response.data.userInformation.id,
                        email: response.data.userInformation.email,
                        name: response.data.userInformation.name,
                        image: response.data.userInformation.image
                    });
                    if (token) {
                        this.$store.commit('user/isLoggedIn', true);
                        this.$router.push("/home");
                    }
                } catch (err) {
                    this.errorText = err.message;
                    this.snackbar = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>