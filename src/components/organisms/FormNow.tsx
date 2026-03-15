import { useTranslations } from "next-intl";
import Images from "../atoms/Images";
import { FormIMG } from "../../../public/assets/images/images";
import Form from "../molecules/Form";
import Title from "../atoms/Title";

export default function FormNow() {
    const t = useTranslations();
  return (
    <div className="ds-container py-12">
        <Title variant="black" size="xl" className=" ds-font-bold text-center">
            {t("HomePage.Form.FormNowTitle")}
        </Title>
        <div className="ds-container grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 ds-bg-primary p-6 rounded-lg shadow-md">
            <Images src={FormIMG} alt="FormNow" className="w-full h-full rounded-lg shadow-md" />
            <Form />
        </div>
    </div>
  );
}