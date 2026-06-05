import Services from "./(website)/_components/Services";
import Hero from "./(website)/_components/Hero";
import AboutSection from "./(website)/_components/Abouts";
import GallerySection from "./(website)/_components/GallerySection";


export default function Home() {
  return (
<div className="">
  <Hero/>
  <AboutSection/>
<Services/>
<GallerySection/>

</div>
  );
}
