import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import "bootstrap-icons/font/bootstrap-icons.css";
export default function Dashboard({ children }) {
  return (
    <html lang="en">
      <body className="flex item-center">
        <Sidebar />
        <main className="flex-1 rounded-sm border border-stroke bg-gray-800  relative ">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
