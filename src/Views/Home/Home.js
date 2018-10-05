import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Post from '../../Components/Post/Post';
import logo from '../../Components/Images/icon2.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home-cont">
      <Nav/>
      <img src={logo} className="Hm" alt="logo" />
      <Post/>
      </div>
    );
  }
}
export default Home;
