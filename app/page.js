import { personalData } from "@/utils/data/personal-data";

// Import server-safe components
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Education from "./components/homepage/education";

// Import client-only components
import BlogClient from "./components/homepage/blog-client";
import ContactClient from "./components/homepage/contact-client";

// Fetch Dev.to posts server-side
async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  return data.filter(item => item?.cover_image).sort(() => Math.random() - 0.5);
}

export default async function Home() {
  const blogs = await getData();

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <BlogClient blogs={blogs} /> {/* client component */}
      <ContactClient /> {/* client component */}
    </div>
  );
}
