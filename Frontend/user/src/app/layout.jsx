import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "./StoreProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authToken from "@/lib/token";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product-Zone",
  description: "Product Zone",
};

export default async function RootLayout({ children }) {
  const token = await authToken();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider token={token}>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
