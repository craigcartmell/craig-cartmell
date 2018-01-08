import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="w-full h-full bg-blue-darkest text-white overflow-hidden">
                <Header />

                <section className="flex w-full flex-wrap">
                    <div className="w-1/4 h-1 bg-pink" />
                    <div className="w-1/4 h-1 bg-teal-light" />
                    <div className="w-1/4 h-1 bg-blue-light" />
                    <div className="w-1/4 h-1 bg-green" />
                </section>

                <About />

                <Projects />

                <Footer />
            </div>
        );
    }
}

export default App;
