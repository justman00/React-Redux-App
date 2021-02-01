import React from "react";
import InputSearch from "./components/InputSearch";
import RecipiesList from "./components/RecipiesList";
import { Heading } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading as="h2" size="xl">
        RecipeLabs
      </Heading>
      <InputSearch />
      <RecipiesList />
    </div>
  );
}

export default App;
