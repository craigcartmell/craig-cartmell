import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png'
import Icon from 'react-simple-icons'
import hero from './images/projects/exxon-mobil-sales-supervisor-excellence.png'
import sc from './images/projects/jcdecaux-smart-content.png'

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

        <div className="flex w-full flex-wrap bg-teal-light p-4">
          <div className="flex-1 max-w-sm rounded-sm overflow-hidden shadow-lg mr-3 bg-white">
            <img className="w-full" src={hero} alt="ExxonMobil - Sales Supervisor Excellence"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">ExxonMobil - Sales Supervisor Excellence</div>
              <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <Icon name="github" fill="#181717" size="32"/>
              <Icon name="html5" fill="#1DA1F2" size="32"/>
              <Icon name="javascript" fill="#1DA1F2" size="32"/>
              <Icon name="css" fill="#1DA1F2" size="32"/>
            </div>
          </div>

          <div className="flex-1 max-w-sm rounded-sm overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={sc} alt="JCDecaux - SmartContent"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">JCDecaux - SmartContent</div>
              <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <Icon name="github" fill="#181717" size="32"/>
              <Icon name="html5" fill="#1DA1F2" size="32"/>
              <Icon name="javascript" fill="#1DA1F2" size="32"/>
              <Icon name="css" fill="#1DA1F2" size="32"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
