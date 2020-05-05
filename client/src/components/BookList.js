import React, { Component } from 'react';
import {graphql} from "react-apollo";
import {getBooksQuery} from "../queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null
        } 
    }

    displayBooks() {
        const data = this.props.data;
        if(data.loading) {
            return <div>Loading Books</div>
        }
        return data.books.map(book => <li key={book.id} onClick={ (e) => this.setState({ selected: book.id }) }>{book.name}</li>)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);

// const BookList = () => {
//     const { loading, error, data } = useQuery(getBooksQuery);
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
//
//     const { books } = data;
//
//     const bookListItems = books.map( ({ id, name }) => {
//         return <li key={id}>{name}</li>;
//     });
//
//     return (
//         <div>
//             <ul id="book-list">{bookListItems}</ul>
//         </div>
//     );
// };
//
// export default BookList;
