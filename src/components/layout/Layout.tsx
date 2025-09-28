import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import QueryClientProviderContainer from "../ui/query-client-provider-container/QueryClientProviderContainer";
import { NextIntlClientProvider } from "next-intl";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <QueryClientProviderContainer>
        <NextIntlClientProvider>
          <Navbar />
          <div className="max-w-full overflow-hidden">
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </QueryClientProviderContainer>
    </div>
  );
};

export default Layout;
