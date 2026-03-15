import { useTranslations } from "next-intl";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

export default function Form() {
    const t = useTranslations();
  return (
    <form className="p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{t("HomePage.Form.Title")}</h2>
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t("HomePage.Form.YourName")}
            </label>
            <Input
                type="text"
                id="name"
                placeholder={t("HomePage.Form.YourNamePlaceholder")}
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-200 outline-none"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t("HomePage.Form.Email")}
            </label>
            <Input
                type="email"
                id="email"
                placeholder={t("HomePage.Form.EmailPlaceholder")}
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-200 outline-none"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium mb-1">
                {t("HomePage.Form.YourMessage")}
            </label>
            <textarea
                id="text"
                placeholder={t("HomePage.Form.YourMessagePlaceholder")}
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-200 outline-none resize-none h-32"
            />
        </div>
        <div className="mb-4">
            {/* العنوان الخاص بالحقل */}
            <Text className="block text-sm font-semibold mb-2">
                {t("HomePage.Form.YourSpecialization")}
            </Text>

            {/* القائمة المنسدلة */}
            <select
                name="case_type"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none appearance-none"
                defaultValue=""
            >
                {/* خيار افتراضي (Placeholder) */}
                <option value="" disabled>
                    {t("HomePage.Form.selectOption")} {/* تأكد من إضافة هذا المفتاح في ملف الترجمة */}
                </option>

                {/* الخيارات المتاحة */}
                <option value="civil">
                    {t("HomePage.Form.civil")}
                </option>

                <option value="criminal">
                    {t("HomePage.Form.criminal")}
                </option>

                <option value="commercial">
                    {t("HomePage.Form.commercial")}
                </option>
            </select>
        </div>
        <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
            {t("HomePage.Form.submit")}
        </Button>
    </form>
  );
}