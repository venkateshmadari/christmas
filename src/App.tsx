import EventDetails from "./components/EventDetails";
import FeaturedEvent from "./components/FeaturedEvent";
import GreetingSection from "./components/GreetingSection";
import HomeWelcomeSection from "./components/HomeWelcomeSection";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto">
      <HomeWelcomeSection />
      <EventDetails />
      <FeaturedEvent />
      <GreetingSection />
    </div>
  );
};

export default App;
