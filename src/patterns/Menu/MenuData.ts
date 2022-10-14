import {LangDataInterface} from "../../lang/LangData";

export interface Menu {
  path: string;
  name: string;
}

export const LangData: LangDataInterface<Menu[]> = {
    "pt-BR": [
        {
          name: "Home",
          path: "/",
        },

        {
        name: "Sobre Mim",
        path: "/about",
      },
      {
        name: "Carreira",
        path: "/career",
      },
    ],
    "en-US": [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About Me',
            path: '/about'
        },
        {
            name: 'Career',
            path: '/career'
        }
    ]
}
