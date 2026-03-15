"use server";

import { cookies } from "next/headers";
import { Locale } from "next-intl";
import { revalidatePath } from "next/cache";

export async function changeLocaleAction(locale: Locale) {
  const store = await cookies();
  store.set("locale", locale);
    revalidatePath("/"); // ← هذا السطر كان ناقصاً — بدونه الصفحة لا تتحدث

}
