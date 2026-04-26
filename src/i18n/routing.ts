import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "ar", "fa"],
  defaultLocale: "tr",
  localePrefix: "as-needed", // /tr için prefix yok, /en, /ar, /fa için var
});
