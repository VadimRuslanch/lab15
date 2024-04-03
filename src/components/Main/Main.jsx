import './Main.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import NewsPage from "./NewsPage/NewsPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

export default function Main(){
    return(
        <main className="main">
            <section className='section'/>
            <article className='article'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/contacts' element={<ContactsPage />}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </article>
            <aside className='aside'>
                <p className='aside__text'>Анна</p>
            </aside>
        </main>
    )
}