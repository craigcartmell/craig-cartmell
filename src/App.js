import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png'
import Icon from 'react-simple-icons'

class App extends Component {
  render() {
    return (
      <div className="w-full h-auto">
        <header className="flex w-full h-auto p-4 y-4">
          <div className="flex-1">
            <img alt="Craig Cartmell - Full Stack Developer" className="flex-1 w-1/3 min-w-0" src={logo}/>
          </div>
          <div className="flex-1">
            <div className="flex float-right">
              <span className="mr-3">
                <a href="https://www.linkedin.com/in/craigcartmell1/" target="_blank">
                  <Icon name="linkedin" fill="#0077B5" size="32"/>
                </a>
              </span>
              <span className="mr-3">
                <a href="https://github.com/craigcartmell" target="_blank">
                  <Icon name="github" fill="#181717" size="32"/>
                </a>
              </span>
              <span className="mr-3">
                <a href="https://twitter.com/craigcartmell1" target="_blank">
                  <Icon name="twitter" fill="#1DA1F2" size="32"/>
                </a>
              </span>
            </div>
          </div>
        </header>
        <section className="flex w-full h-full bg-grey">
          <div className="w-1/2 h-64">

          </div>
          <div className="w-1/2 h-64">

          </div>
        </section>
      </div>
    );
  }
}

export default App;
