import StepSlider from "./StepSlider";

function App() {
  return (
    <div className="container" style={{padding: '50px'}}>
      <StepSlider config={{ steps: 5, value: 0 }} />
    </div>
  )
}

export default App;
