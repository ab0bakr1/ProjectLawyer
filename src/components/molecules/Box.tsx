import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  text: string;
}

export default function Box({ title, text }: Props) {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-2">
      {/* العنوان باللون الذهبي ليعطي طابع الفخامة */}
      <Title className="ds-text-secondary ds-font-bold ds-text-lg" center={true}>
        {t(title)}
      </Title>
      {/* النص الوصفي بلون فاتح مريح للعين */}
      <Text className="text-white/70 ds-text-sm leading-relaxed" center={true}>
        {t(text)}
      </Text>
    </div>
  );
}