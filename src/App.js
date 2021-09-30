import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello!</h1>
        </header>
        <main>
          <Dictionary defaultKeyWord="forest" />
        </main>
        <footer className="App-footer">
          this website was made by{" "}
          <a
            href="https://www.linkedin.com/in/sara-nascimento-71a29b156/"
            target="_blank"
            rel="noreferrer"
          >
            Sara
          </a>
          , and is{" "}
          <a
            href="https://github.com/saranascimento9/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
