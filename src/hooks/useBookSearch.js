import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useBookSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [searchIsbn, setSearchIsbn] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://openlibrary.org/search.json?q=${searchText.trim()}&fields=key,title,author_name,isbn,subject_facet&limit=4`);
      setBooks(response.data.docs);
    } catch (error) {
      setError(`Error searching books: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [searchText]);


  const handleIsbn = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://covers.openlibrary.org/b/isbn/${searchIsbn}-S.jpg`);
      setBooks(response.data.docs);
      console.log(response);
    } catch (error) {
      setError(`Error image book: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [searchIsbn]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.trim()) {
        handleSearch();
        handleIsbn();
      } else {
        setBooks([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, handleSearch,handleIsbn]);
  
  return {
    searchText,
    setSearchText,
    searchIsbn,
    setSearchIsbn,
    books,
    loading,
    error,
  };
};

export default useBookSearch;
