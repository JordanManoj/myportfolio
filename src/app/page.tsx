import { Contact } from '@/components/contact';
import { CursorGlow } from '@/components/cursor-glow';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Intro } from '@/components/intro';
import { Loader } from '@/components/loader';
import { Marquee } from '@/components/marquee';
import { Philosophy } from '@/components/philosophy';
import { Projects } from '@/components/projects';
import { SiteNav } from '@/components/site-nav';
import { Stats } from '@/components/stats';

const HomePage = async () => {
  return (
    <>
      <Loader />
      <div className="grain-overlay" aria-hidden="true" />
      <CursorGlow />
      <SiteNav />

      <div className="container flex flex-col items-center">
        <Intro />
      </div>

      <Marquee />

      <div className="container flex flex-col items-center">
        <Philosophy />
        <Stats />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
