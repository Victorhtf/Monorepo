import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return <p> {t("sections.dashboards")}</p>;
}
