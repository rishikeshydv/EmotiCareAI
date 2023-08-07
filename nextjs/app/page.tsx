import HomeCards from './components/Cards/HomeCards'
import FloatingBot from './components/Layout/Floating';
import Hero from './components/Layout/Hero'
import Prof from './components/Layout/Prof';

export default function Home() {
  return (
    <div>
      <div
        className="lg:px-32 md:px-20 px-7 py-5 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url(/images/GenAI.png)",
          backgroundBlendMode: "multiply",
        }}
      >
        <Hero />
      </div>
      <HomeCards />
      <Prof />
      <FloatingBot />
    </div>
  );
}
