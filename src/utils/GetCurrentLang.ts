import { useRouter } from "next/router";
import { LocaleType } from "../lang/LocaleType";

export function GetCurrentLang(): LocaleType {
  const {locale} = useRouter()

  return locale as LocaleType
} 