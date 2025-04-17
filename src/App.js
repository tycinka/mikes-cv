import './index.css';
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Card from "./components/card/Card";
import Main from './layout/main';

function App() {
  return (
    <Main>
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="works">
          <Card title="Boliga.cz" year="2024" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt dictum erat ut fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non tortor fermentum, varius diam nec, viverra est. Mauris nec odio suscipit, ultrices massa a, auctor ipsum. Phasellus aliquam vitae est id ultricies. In vulputate lacinia turpis ut consectetur. In ante lorem, interdum nec sem id, ornare." />
        </section>
      </main>
    </Main>
  );
}

export default App;
