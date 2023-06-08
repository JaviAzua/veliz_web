import Container from "./components/Container";
import Logistics from "./components/descriptions/Logistics";
import HeroBanner from "./components/heroBanner/HeroBanner";

export default function Home() {
  return (
    <>
      <section className="pb-20" id="hero">
        <HeroBanner />
      </section>
      <section className="bg-darkBlue">
        <Container>
          <Logistics />
        </Container>
      </section>
    </>
  );
}
