import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <Flex justifyContent="center" alignItems="center" gap="2">
      <Button onClick={onPrevious} disabled={currentPage <= 1}>
        {"<"}
      </Button>
      <Text>
        Page {currentPage} of {totalPages}
      </Text>
      <Button onClick={onNext} disabled={currentPage >= totalPages}>
        {">"}
      </Button>
    </Flex>
  );
};

export default Pagination;
