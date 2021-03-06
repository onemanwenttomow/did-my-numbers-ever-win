
export default {
    mode: "universal",
    serverMiddleware: ['~/api/index.js'],

    /*
 ** Headers of the page
 */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit:600,700&display=swap' }]
    },
    /*
 ** Customize the progress-bar color
 */
    loading: { color: "#fff" },
    /*
 ** Global CSS
 */
    css: [],
    /*
 ** Plugins to load before mounting the App
 */
    plugins: ['~/plugins/vue-fragments'],
    /*
 ** Nuxt.js dev-modules
 */
    buildModules: [],
    /*
 ** Nuxt.js modules
 */
    modules: [
        '@nuxtjs/axios',
    ],

    axios: {
    // proxyHeaders: false
    },
    /*
 ** Build configuration
 */
    build: {
    /*
     ** You can extend webpack config here
     */
        extend(config, ctx) { }
    }
};
