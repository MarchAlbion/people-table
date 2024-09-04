import { Select } from "./components/Select/Select";
import "./App.css";
import { Container } from "./components/Container/Container";
import { Input } from "./components/Input/Input";
import { MyTable } from "./components/Table/MyTable";


function App() {

  return (
    <div className="App">
      <Container>
        <>
          <div className="input-container">
            <Input />
            <Select />
          </div>
          <MyTable />
        </>
      </Container>
    </div>
  );
}

export default App;
