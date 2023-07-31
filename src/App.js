import './App.css';
import Header from './src/Header';
import Nav from './src/Nav';
import Main from './src/Main';
import Footer from './src/Footer';

function App() {
  return (
    <>
      <header>
        {/* header content goes here */}
      </header>

      <nav>
        {/* Navigation bar content goes here */}
        Navigation bar
      </nav>

      <main>
        <section>
          {/* Hero Section content goes here */}
          Hero Section
        </section>

        <section>
          {/* Highlights content goes here */}
          Highlights
        </section>

        <section>
          {/* Testimonials content goes here */}
          Testimonials
        </section>

        <section>
          {/* About content goes here */}
          About
        </section>
      </main>

      <footer>
        {/* Footer Navigation content goes here */}
        Footer Navigation
      </footer>
    </>
  );
}

export default App;