import { useState, useEffect } from 'react';
import { Table } from './features/table/Table/Table';

const callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    // throw Error(body.message);
  }
  return body;
};

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   callBackendAPI()
  //     .then((res) => setData(res.express))
  //     .catch((err) => console.log(err));
  // });
  return (
    <div className="app">
      <Table />
    </div>
  );
}

export default App;
