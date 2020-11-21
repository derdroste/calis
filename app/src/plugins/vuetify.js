import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            themeCache: {
                get: key => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            },
        },
        themes: {
            light: {
                sky: '#AEC6F0',
                ocean: '#1E1C24',
                wood: '#553C2A',
                forest: '#305339',
                gold: '#ffdabb',
                sunlight: '#E06513',
                olive: '#607d2c',
                wenge: '#2B1E16'
            }
        }
    }
});
