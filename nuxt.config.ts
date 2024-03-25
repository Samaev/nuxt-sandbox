// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "pathe";
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "~/assets/main.scss",
    "bootstrap/dist/css/bootstrap.min.css"
  ],
})
