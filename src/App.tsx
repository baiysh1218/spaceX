import React from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import MainRoutes from "./mainRoutes/MainRoutes";

function App() {
  return (
    <>
      <BaseLayout>
        <MainRoutes />
      </BaseLayout>
    </>
  );
}

export default App;
