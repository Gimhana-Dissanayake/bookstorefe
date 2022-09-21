import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Paper, Typography, TextField, Button } from "@material-ui/core";
import styles from "./BookStyles";
import { getBooksByTitle } from "../../module/book/bookAction";

const BookFilter = () => {
  const classes = styles();
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  return (
    <Box className={classes.bookFilter}>
      <Paper className={classes.bookFilterPaper}>
        <Typography>Search Books</Typography>
        <Box paddingTop={3} marginBottom={2}>
          <TextField
            placeholder="Enter book title"
            id="book-search"
            data-testid="book-title-input"
            label="Enter book title"
            variant="outlined"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(getBooksByTitle(searchText));
          }}
          color="primary"
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
};

export default BookFilter;
