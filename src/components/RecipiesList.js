import React from "react";
import { connect } from "react-redux";
import { Box, Image, Heading } from "@chakra-ui/react";
import dish from "../dish.png";

const RecipiesList = (props) => {
  return (
    <div>
      <Heading as="h4" size="md" marginTop="8">
        List of recipies:
      </Heading>
      {props.recipies.map((recipe, idx) => (
        <Box
          w="200"
          shadow="md"
          display="flex"
          alignItems="flex-start"
          borderWidth="1px"
          borderRadius="md"
          marginTop="5"
          padding="3"
          key={idx}
        >
          {recipe.thumbnail ? (
            <Image
              boxSize="100px"
              objectFit="cover"
              src={recipe.thumbnail}
              alt="food_img"
            />
          ) : (
            <Image boxSize="100px" src={dish} alt="food_img" />
          )}
          <Heading as="h5" size="xs" marginLeft="3">
            {recipe.title}
          </Heading>
        </Box>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipies: state.recipies,
  };
};
export default connect(mapStateToProps)(RecipiesList);
