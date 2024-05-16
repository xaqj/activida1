import { useState } from "react";
const useBookRental = () => {
    const [rentedBooks, setRentedBooks] = useState([]);

    const rentBook =(book) => {
        //Comprueba si el libro esta alquilado
        if(rentedBooks.some((rentedBook) => rentedBook.isbn ===book.isbn)){
            return false;
        }
        //Alquila libro
        setRentedBooks([...rentedBooks,book]);
        console.log("Alquilado....");
        return true;
        
    };

    const extendRental = (isbn) => {
        setRentedBooks((prevBooks) =>
        prevBooks.map((book) =>
        book.isbn === isbn ? {...book, extended:true}: book
        )
    );
    console.log("Plazo extendido....");

    };
    const returnBook = (isbn) => {
        setRentedBooks((prevBooks) =>
        prevBooks.filter((book) =>book.isbn !==isbn)
    );
    console.log("Libro devuelto....");

    };
    return {
        rentedBooks,
        rentBook,
        extendRental,
        returnBook,
    };
};

export default useBookRental;