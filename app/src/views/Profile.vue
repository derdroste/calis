<template>
    <div class="profile">
        <v-container>
            <cloud style="max-width: 400px">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <div style="position: relative; text-align: center">
                            <v-fade-transition>
                                <v-icon v-if="$store.state.user.information.image === '' || $isNil($store.state.user.information.image)"
                                        color="gold" style="font-size: 80px;" class="py-4">mdi-account-outline</v-icon>
                                <v-img v-else :src="$store.state.user.information.image" class="profile-image"></v-img>
                            </v-fade-transition>
                            <v-fade-transition>
                                <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="wenge"
                                        light
                                >
                                    <uploader :minAspectRatio="1.2" :commit="'user/setImage'"></uploader>
                                </v-overlay>
                            </v-fade-transition>
                        </div>
                    </template>
                </v-hover>
                <user-input></user-input>
            </cloud>
        </v-container>
    </div>
</template>

<script>
    import Cloud from "../components/ui-components/sky/Cloud";
    import Uploader from "../components/ui-components/Uploader";
    import UserInput from "../components/profile/UserInfo";
    export default {
        name: "Profile",
        components: {UserInput, Uploader, Cloud},
    }
</script>

<style lang="scss">
    .profile {
        .v-overlay__content {
            width: 100%;
            height: 100%;
        }
        .profile-image-button {
            position: absolute;
            bottom: 15px;
            right: 20px;
        }

        #profile-foto-camera,
        #profile-foto-upload{
            opacity: 0;
            width: 40px;
            height: 40px;
        }

        .profile-foto {
            position: relative;
            cursor: pointer;
            &:first-child {
                margin-right: 15px;
            }
            label {
                position: absolute;
                top: 0;
                left: 0;
                cursor: pointer !important;
            }
        }

        .profile-image {
            border-bottom: 1px solid var(--wood);
        }
    }
</style>