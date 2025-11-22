import Navbar from "./components/Navbar";
import "./globals.css";
import LoadingWrapper from "./components/LoadingWrapper";
import { LoadingProvider } from "./components/LoadingContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Astrix AI BOS",
  description: "Meet NOHA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </head>
      <body className={"antialiased overflow-x-hidden"}>
        <Toaster
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
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
