<template>
  <v-app
      :style="{background: $vuetify.theme.themes.light.ocean}"
      class="calis"
  >
    <app-bar></app-bar>
    <v-main>
      <v-expand-transition>
         <router-view />
      </v-expand-transition>
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
    --wood: #cc9d7a;
    --wenge: #2B1E16;
    --ocean: #1E1C24;
  }

  .v-main {
    margin-bottom: 60px;
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
          color: var(--sunlight) !important;
        }
      }

      .error--text {
        color: var(--sunlight) !important;
      }
    }
  }

  .leaf {
    &.theme--light.v-card {
      color: var(--wood);

      .v-card__title {
        color: var(--gold);
      }
    }
    .theme--light.v-btn {
      color: var(--forest);
    }

    .v-card__text {
      color: var(--wood) !important;
    }
  }

  .leaf-input {
    &.theme--light.v-input {
      color: var(--wood) !important;
    }
    .theme--light.v-label {
      color: var(--wood) !important;
    }
    .theme--light.v-label.v-label--active {
      color: var(--wood) !important;
    }
    &.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
      border-color: var(--wood) !important;
    }
    &.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
      border-color: var(--wood) !important;
    }
    &.theme--light.v-input input, .theme--light.v-input textarea {
      color: var(--wood) !important;
    }

    &.error--text {
      &.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
        border-color: var(--sunlight) !important;
      }
    }
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

  .v-toolbar {
    .v-btn {
      min-width: 50px;

      &:last-child {
        min-width: 20px;
        width: 20px;
        margin-left: 20px;
      }
    }
  }
</style>