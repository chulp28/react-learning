const App = () => {
  const [text, setText] = React.useState('Click me');
  function changeText() {
    setText('Changed');
  }
  return (
    <div className="app">
      <button onClick={changeText}>{text}</button>
    </div>
  );
};

let container = document.getElementById('app');
let root = ReactDOM.createRoot(container);

root.render(<App />);
