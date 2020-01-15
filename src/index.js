import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [width, setWidth] = React.useState(12);
  const styles = {
    backgroundColor: "#00cb78",
    width: width + "%"
  };

  React.useEffect(() => {
    if (width < 100) {
      let interval = setInterval(() => setWidth(width + 0.05), 5);

      return () => clearInterval(interval);
    }
  }, [width]);

  return (
    <div>
      <div className="App">
        <div style={styles}>
          <span>{width.toFixed(0)}%</span>
        </div>
      </div>
      <button onClick={() => setWidth(12)}>Reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
