import React from "react";
import { Link } from "react-router-dom";
import useBookIsbn from '../hooks/useBookSearch';
export const Book =({ title, author_name, isbn,categorias})=>{      
  const {
    searchIsbn,
    setSearchIsbn,
    handleIsbn
  } = useBookIsbn();
    
    return (
        <div className="card">
            <p>Titulo: {title}</p>
            <p>Autor: {author_name}</p>
            <p 
            value={searchIsbn}
            onChange={(e) => setSearchIsbn(e.target.value)}>ISBN: {isbn}</p>
            <p>Categorías:</p>
            <ul>
                {categorias.map((categoria,index)=> (
                    <li key={index}>{categoria}</li>
                )
                )}
            </ul>
            <Link to ={`/books/${isbn}`}>
                <button onClick={handleIsbn}>Ver detalles</button>
            </Link>
        </div>
    );
}