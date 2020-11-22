<template>
    <v-container>
        <leaf>
            <v-card-title>Create an Account!</v-card-title>
            <v-form
                    @submit.prevent="registerUser"
            >
                <v-text-field
                        type="text"
                        id="name"
                        label="Name"
                        v-model="register.name"
                        class="leaf-input mx-4"
                        :rules="rules.name"
                >
                </v-text-field>
                <v-text-field
                        type="email"
                        id="registeremail"
                        label="Email"
                        v-model="register.email"
                        class="leaf-input mx-4"
                        :rules="rules.email"
                >
                </v-text-field>
                <v-text-field
                        type="password"
                        id="registerpassword"
                        label="Password"
                        v-model="register.password"
                        class="leaf-input mx-4"
                        :rules="rules.password"
                >
                </v-text-field>
                <v-card-text>Already have an account?   <router-link to="/">click here</router-link></v-card-text>
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
            Invalid Email or Password.

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
        name: "Register",
        components: {Leaf},
        data() {
            return {
                register: {
                    name: "",
                    email: "",
                    password: "",
                },
                rules: {
                    name: [
                        value => !!value || 'Required',
                        value => (value || '').length <= 100 || 'Max 100 characters',
                        value => (value || '').length >= 3 || 'Min 3 characters'
                    ],
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
                        value => (value || '').length >= 3 || 'Min 3 characters'
                    ],
                },
                snackbar: false,
                errorText: ''
            };
        },
        methods: {
            async registerUser() {
                try {
                    let response = await this.$http.post("/api/users", this.register);
                    let token = response.headers['x-auth-token'];
                    this.$store.commit('user/setInformation', {
                        id: response.data._id,
                        name: response.data.name,
                        email: response.data.email
                    });
                    if (token) {
                        localStorage.setItem("jwt", token);
                        this.$store.commit('user/isLoggedIn', true);
                        this.$router.push("/");
                    } else {
                        this.errorText = 'Email is already in use.';
                        this.snackbar = true;
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