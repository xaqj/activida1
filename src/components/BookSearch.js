import React from 'react';
import useBookSearch from '../hooks/useBookSearch';
import BookList from '../views/BookList';
export function BookSearch() {
  const {
    searchText,
    setSearchText,
    books,
    loading,
    error,
    handleSearch
  } = useBookSearch();

  return (
    <div className='container__search'>
      <h1 className='search__title'>Buscar libros con la Api Open Library</h1>
      <div className='search__boton'>
        <label>Buscar: </label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Introduce texto para buscar..."
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <BookList books={books} />
    </div>
  );
}

