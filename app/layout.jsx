import Navbar from "./components/Navbar";
import "./globals.css";
import LoadingWrapper from "./components/LoadingWrapper";
import { LoadingProvider } from "./components/LoadingContext";

export const metadata = {
  title: "Astrix AI BOS",
  description: "Meet NOHA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"antialiased overflow-x-hidden"}>
        <LoadingProvider>
          <LoadingWrapper>
          
              <Navbar />
            <main>{children}</main>
          </LoadingWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
