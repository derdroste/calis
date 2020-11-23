<template>
    <div>
        <v-row class="mx-0">
            <v-col v-if="!button.name" class="pa-0 ma-0" cols="10">
                <v-card-title >{{$store.state.user.information.name}}</v-card-title>
            </v-col>
            <v-col v-if="button.name" class="pa-0 ma-0 d-flex align-center justify-center" cols="1">
                <v-btn class="ml-1" fab color="sunlight" x-small @click="toggleButton('name', false)">
                    <v-icon color="wenge">mdi-close-outline</v-icon>
                </v-btn>
            </v-col>
            <v-col v-if="button.name" class="pa-0 ma-0" cols="9">
                <v-form @submit.prevent="sendInfoToServer('name')">
                    <v-text-field
                            autocomplete="off"
                            type="text"
                            id="name"
                            label="Name"
                            v-model="profile.name"
                            class="leaf-input mx-4"
                            :rules="rules.name"
                    />
                </v-form>
            </v-col>
            <v-col class="pa-0 ma-0 d-flex align-center justify-center" cols="2">
                <v-fade-transition v-if="!button.name">
                        <v-btn fab color="gold" x-small @click="toggleButton('name', true)">
                            <v-icon color="wenge">mdi-pencil-outline</v-icon>
                        </v-btn>
                </v-fade-transition>
                <v-fade-transition v-else>
                    <v-btn fab color="gold" x-small  @click="sendInfoToServer('name')">
                        <v-icon color="wenge">mdi-check-outline</v-icon>
                    </v-btn>
                </v-fade-transition>
            </v-col>
        </v-row>

        <v-row class="mx-0">
            <v-col v-if="!button.email" class="pa-0 ma-0" cols="10">
                <v-card-text >{{$store.state.user.information.email}}</v-card-text>
            </v-col>
            <v-col v-if="button.email" class="pa-0 ma-0 d-flex align-center justify-center" cols="1">
                <v-btn class="ml-1" fab color="sunlight" x-small @click="toggleButton('email', false)">
                    <v-icon color="wenge">mdi-close-outline</v-icon>
                </v-btn>
            </v-col>
            <v-col v-if="button.email" class="pa-0 ma-0" cols="9">
                <v-form @submit.prevent="sendInfoToServer('email')">
                    <v-text-field
                            autocomplete="off"
                            type="text"
                            id="email"
                            label="Email"
                            v-model="profile.email"
                            class="leaf-input mx-4"
                            :rules="rules.email"
                    />
                </v-form>
            </v-col>
            <v-col class="pa-0 ma-0 d-flex align-center justify-center" cols="2">
                <v-fade-transition v-if="!button.email">
                    <v-btn fab color="gold" x-small @click="toggleButton('email', true)">
                        <v-icon color="wenge">mdi-pencil-outline</v-icon>
                    </v-btn>
                </v-fade-transition>
                <v-fade-transition v-else>
                    <v-btn fab color="gold" x-small  @click="sendInfoToServer('email')">
                        <v-icon color="wenge">mdi-check-outline</v-icon>
                    </v-btn>
                </v-fade-transition>
            </v-col>
        </v-row>
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
    </div>
</template>

<script>
    export default {
        name: "UserInput",
        data() {
            return {
                snackbar: false,
                errorText: '',
                button: {
                    name: false,
                    email: false
                },
                profile: {
                    name: null,
                    email: null
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
                }
            }
        },
        methods: {
            toggleButton(btn, val) {
                this.button[btn] = val;
            },
            async sendInfoToServer(endpoint) {
                try {
                    const token = localStorage.getItem('jwt');
                    let response = await this.$http.put(`/api/user/me/info/${endpoint}`, {[endpoint]: this.profile[endpoint]}, { headers: {"x-auth-token" : token}});
                    this.$store.commit(`user/set${endpoint}`, response.data);
                    this.button[endpoint] = false;
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