import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
