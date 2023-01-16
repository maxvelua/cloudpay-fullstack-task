import { useEffect, useState } from "react";
import { companiesAPI } from "./api";
import { CompaniesTable } from "./components/CompaniesTable";
import { Company } from "./components/CompaniesTable/types";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Company[]>([]);

  useEffect(() => {
    setIsLoading(true);
    companiesAPI
      .getCompanies()
      .then((data) => {
        if (data) {
          setData(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Loading.....</p>}
      {!isLoading && <CompaniesTable items={data} />}
    </div>
  );
}

export default App;
