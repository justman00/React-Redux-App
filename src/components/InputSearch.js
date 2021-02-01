import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRecipies } from "../actions/recipeActions";
import { Container, InputGroup, Input, Button } from "@chakra-ui/react";

const InputSearch = (props) => {
  // console.log("InputSearch props = ", props);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.fetchRecipies(inputValue);
  };

  return (
    <Container marginTop="8">
      <form onSubmit={handleSubmit}>
        <InputGroup size="md">
          <Input onChange={handleChange} value={inputValue} />
          <Button type="submit" size="md" width="200px" colorScheme="blue">
            {props.loading ? "Loading" : "Search recipe"}
          </Button>
        </InputGroup>
      </form>
      {props.error ? <div style={{ color: "red" }}>{props.error}</div> : null}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = {
  fetchRecipies,
};
export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
