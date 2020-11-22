<template>
  <v-app
      :style="{background: $vuetify.theme.themes.light.ocean}"
      class="calis"
  >
    <app-bar></app-bar>
    <v-main>
      <transition
              name="fade"
              mode="out-in"
              @beforeLeave="beforeLeave"
              @enter="enter"
              @afterEnter="afterEnter"
      >
         <router-view />
      </transition>
    </v-main>
    <bottom-bar/>
  </v-app>
</template>

<script>

import BottomBar from "./components/ui-components/BottomBar";
import AppBar from "./components/ui-components/AppBar";
export default {
  name: 'App',
  components: {AppBar, BottomBar},
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
  }
};
</script>

<style lang="scss">
  @import './assets/fonts/material-design-icons.css';
  @import 'assets/fonts/roboto.css';

  :root {
    --gold: #ffdabb;
    --sunlight: #E06513;
    --forest: #305339;
    --olive: #607d2c;
    --sky: #AEC6F0;
    --wood: #553C2A;
    --wenge: #2B1E16;
  }

  .calis-logo {
    height: 50px;
    width: auto;
  }
  .calis {
    &.v-application {
      .primary--text {
        color: var(--gold) !important;
        caret-color: var(--gold) !important;
      }
      a {
        color: var(--gold);
      }

      .leaf {
        a {
          color: var(--gold);
        }

        .error--text {
          color: var(--gold) !important;
        }
      }

      .error--text {
        color: var(--wenge) !important;
      }
    }
  }

  .leaf {
    &.theme--light.v-card {
      color: rgba(0,0,0,0.87);

      .v-card__title {
        color: var(--gold);
      }
    }
    .theme--light.v-btn {
      color: var(--forest);
    }

    .v-card__text {
      font-weight: 600 !important;
      color: rgba(0,0,0,0.7) !important;
    }
  }

  .leaf-input {
    &.theme--light.v-input {
      color: rgba(0,0,0,0.87) !important;
    }
    .theme--light.v-label {
      color: rgba(0,0,0,0.87) !important;
    }
    .theme--light.v-label.v-label--active {
      color: rgba(0,0,0,0.87) !important;
    }
    &.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
      border-color: rgba(0,0,0,0.87) !important;
    }
    &.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
      border-color: rgba(0,0,0,0.87) !important;
    }
    &.theme--light.v-input input, .theme--light.v-input textarea {
      color: rgba(0,0,0,0.87) !important;
    }

    &.error--text {
      &.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
        border-color: var(--gold) !important;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: height, opacity;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .v-bottom-navigation {
    .v-btn__content {
      color: var(--gold);
    }
  }

  .menu-button {
    text-decoration: none;
    margin-left: 4px;
    padding: 0 !important;
  }

  .v-text-field input {
    background-color: transparent !important;
  }


</style>