import Title from "../atoms/Title";
import { useTranslations } from "next-intl";

export default function Heading() {
    const t = useTranslations();
  return (
    <div className="">

      <div className="flex items-center justify-center  gap-1">
        <Title
          variant="black"
          size="xl"
          className=" ds-font-bold"
          center={true}>
            {t("HomePage.customers.title")}
        </Title>
        <Title variant="primary" size="xl" className=" ds-font-bold">
            {t("HomePage.customers.TitleSpan")}
        </Title>
      </div>
    </div>
  );
}