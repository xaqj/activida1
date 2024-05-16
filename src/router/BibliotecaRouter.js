import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Home } from "../components/Home";
import { BookSearch } from "../components/BookSearch";
import { Rentail } from "../components/Rentail";
import { Menu } from "../components/Menu";
import  BookDetail from "../views/BookDetails";
import { About } from "../components/About";
export const BibliotecaRouter = () =>{
    return(
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/search/" element={<BookSearch/>} />
                <Route path="/books/:isbn" element={<BookDetail/>}/>
                <Route path="/rentail/" element={<Rentail/>} />
                <Route path="/about/" element={<About/>} />
                <Route path="*" element ={<NotFound/>}/>

            </Routes>        
        </BrowserRouter>
    );
};