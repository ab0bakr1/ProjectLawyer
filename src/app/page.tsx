import PublicLayout from "@/components/layout/PublicLayout";
import Hero from "@/components/organisms/Hero";
import FormNow from "@/components/organisms/FormNow";
import Swipers from "@/components/organisms/Swipers";
import Numbers from "@/components/organisms/Numbers";
import Fields from "@/components/organisms/Fields";
import Contact from "@/components/organisms/Contact";
export default function Page() {
  return <PublicLayout>
      <Hero />
      <div className="ds-bg">
        <Swipers />
      </div>
      <FormNow />
      <div className="ds-bg">
        <Numbers />
        <Fields />
      </div>
      <Contact />
  </PublicLayout>
}
