import Vue from 'vue';
import colors from 'vuetify/lib/util/colors'
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        dark: true,
        themes: {
            dark: {
                primary: colors.shades.white,
                secondary: colors.blue,
                background: colors.shades.black
            }
        }
    }
});
