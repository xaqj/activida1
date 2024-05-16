import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { useParams } from "react-router";

const BookDetails = () => {
    const { bookIsbn } = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(r => r.isbn === bookIsbn);
    
    if(!book){
        return <h2>Libro no encontrado</h2>;
    }

    return(
        <div className="book__details">
            <image></image>
            <h2>{book.title}</h2>
        </div>

    );

}

export default BookDetails;