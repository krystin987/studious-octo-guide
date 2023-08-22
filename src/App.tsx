import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Header />
        <LandingPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;
