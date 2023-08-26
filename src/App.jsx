import "./App.css";
import HeroSection from "./component/Hero";
import Navigation from "./component/Navigation.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;

// ./node_modules/.bin/vite use this command if not working with npm run dev
