import Container from "./components/Container";
import Logistics from "./components/descriptions/Logistics";
import Postvent from "./components/descriptions/Postvent";
import Services from "./components/descriptions/Services";
import HeroBanner from "./components/heroBanner/HeroBanner";

export default function Home() {
  return (
    <>
      <section className="pb-36" id="hero">
        <HeroBanner />
      </section>
      <section className="bg-darkBlue">
        <Container>
          <Logistics />
        </Container>
      </section>
      <div className="p-16" />
      <section className="bg-lightBlue">
        <Container>
          <Services />
        </Container>
      </section>
      <div className="p-16" />
      <section className="">
        <Container>
          <Postvent />
        </Container>
      </section>
      <div className="p-16" />
    </>
  );
}
