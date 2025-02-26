import type { StrapiApp } from "@strapi/strapi/admin";
import Logo from "./extensions/logo.png";

export default {
  config: {
    locales: ["pt-BR"],
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
