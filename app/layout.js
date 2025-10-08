
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Destiny Tch | Full Stack Developer Portfolio",
  description:
    "Portfolio of Destiny Tch, a full stack developer and Logistics and Transport Technology student at Federal University of Technology Minna. Passionate about JavaScript, web development, and problem-solving.",
  icons: {
    icon: "https://cdn-icons-png.freepik.com/128/12452/12452195.png",
  },
  verification: {
    google: "qATybCSaPjOHTDCDIBSKIuQpYwY5GuJ73qrHPdo3NmY"
  },
  openGraph: {
    title: "Destiny Tch | Full Stack Developer Portfolio",
    description:
      "Portfolio of Destiny Tch, a full stack developer and Logistics and Transport Technology student at FUT Minna. Skilled in Python, JavaScript, React, Node.js, and MERN Stack.",
    url: "https://destinytch.com.ng",
    siteName: "Destiny Tch Portfolio",
    images: [
      {
        url: "https://cdn-icons-png.freepik.com/128/12452/12452195.png",
        width: 128,
        height: 128,
        alt: "Destiny Tch Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Destiny Tch | Portfolio",
    description:
      "Full stack developer and software engineering student at FUT Minna. Skilled in JavaScript, React, Node.js, and MERN Stack.",
    site: "@DestinyTch",
    creator: "@DestinyTch",
    images: ["https://cdn-icons-png.freepik.com/128/12452/12452195.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Destiny Tch",
              "alternateName": "Destiny Ezekiel",
              "url": "https://destinytch.com.ng",
              "image": "https://cdn-icons-png.freepik.com/128/12452/12452195.png",
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-employed / Freelance"
              },
              "email": "destinytch@proton.me",
              "telephone": "+2348063250438",
              "sameAs": [
                "https://github.com/DestinyTch",
                "https://www.facebook.com/DestinyTch001/",
                "https://www.linkedin.com/in/destiny-tch-741a1b353/",
                "https://x.com/DestinyTch",
                "https://stackoverflow.com/users/31647040/destinytch",
                "https://leetcode.com/DestinyTch/",
                "https://www.tiktok.com/@DestinyTch"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nigeria"
              },
              "memberOf": {
                "@type": "EducationalOrganization",
                "name": "Federal University of Technology Minna"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "skills": ["JavaScript", "React", "Node.js", "Express", "MongoDB", "MERN Stack", "Web Development"]
              }
            })
          }}
        />

        <ToastContainer />
        
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
