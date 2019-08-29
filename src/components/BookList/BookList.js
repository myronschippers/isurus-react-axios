import React from 'react';
import {connect} from 'react-redux';


//This is a function component. It cant have local state, nor methods!
//You do have access to props sent in, though.
//the return is the same as render in a class component
//no `this`
function BookList(props) {
  return (
    <section>
      <h2>All Books</h2>
      <ul>
        { props.reduxStore.bookList.map( (book, index) => 
          <li key={index}>{book.title} by {book.author}</li>  
        )}
      </ul>
    </section>
  );
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(BookList);
