import { LangDataInterface } from "../../lang/LangData";

export interface HomeLangData {
  title: string
}

export const LangData: LangDataInterface<HomeLangData> = {
  "en-US": {
    title: "Hi ๐",
  },
  "pt-BR": {
    title: "Olรก ๐",
  },
};
