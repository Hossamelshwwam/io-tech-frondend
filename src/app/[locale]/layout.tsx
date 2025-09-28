import Layout from "@/components/layout/Layout";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Layout>{children}</Layout>
    </div>
  );
}
