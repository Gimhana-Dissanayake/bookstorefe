import React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Avatar, Typography } from "@material-ui/core";
import BookIcon from "@mui/icons-material/Book";

const propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};

const BookListItem = ({ book }) => {
  return (
    <Box mb={2}>
      <Paper elevation={2} style={{ paddingTop: 10 }}>
        <Box ml={2} mb={2}>
          <Avatar sx={{ bgcolor: "blue" }}>
            <BookIcon />
          </Avatar>
        </Box>
        <Box ml={2} mt={2} mb={2}>
          <Typography variant="h5">{book.title}</Typography>
          <Typography>{book.description}</Typography>
          <Typography>{book.releaseYear}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

BookListItem.propTypes = propTypes;
export default BookListItem;
