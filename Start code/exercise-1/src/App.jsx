import Header from "./components/Header.jsx";
import Scores from "./components/Scores.jsx";
import { JAVA_RESULTS } from "./data.js";
import { HTML_RESULTS } from "./data.js";
import { ENGLISH_RESULTS } from "./data.js";
import { PYTHON_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header BatchName="GROUP 3" />

      <main className="scores-container">
        <div className="scores">
          <Scores courseName="Java" data={JAVA_RESULTS} />
        </div>
        <div className="scores">
          <Scores courseName="HTML" data={HTML_RESULTS} />
        </div>
        <div className="scores">
          <Scores courseName="English" data={ENGLISH_RESULTS} />
        </div>
        <div className="scores">
          <Scores courseName="Python" data={PYTHON_RESULTS} />
        </div>
      </main>
    </>
  );
}

export default App;