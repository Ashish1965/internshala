import FrameGroupPeople from "../components/frame-group-people";
import LocationTextInput from "../components/location-text-input";
import ProductPeople from "../components/product-people";
import Testimonials1 from "../components/testimonials1";
import Testimonials from "../components/testimonials";
import End from "../components/end";
import Footer from "../components/footer";

const LandingPageSignIn = () => {
  return (
    <div className="w-full relative bg-grey-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <FrameGroupPeople />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <LocationTextInput />
        <ProductPeople />
        <Testimonials1 />
        <Testimonials />
      </main>
      <End />
      <Footer />
    </div>
  );
};

export default LandingPageSignIn;
