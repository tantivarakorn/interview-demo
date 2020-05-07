const addBookReducer = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_BOOK':
      return state.concat([action.data]);
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.id);
    case 'EDIT_BOOK':
      return state.map((book) =>
      book.id === action.id ? {...book, editing:!book.editing}: book);
    case 'UPDATE':
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            name: action.data.editName,
            writer: action.data.editWriter,
            message: action.data.editMessage,
            date: action.data.editDate,
            editing: !book.editing
          }
        } else return book;
      });
    default:
      return state;
  }

};
export default addBookReducer;
