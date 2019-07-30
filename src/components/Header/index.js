import React, { Component } from 'react';
import moment from 'moment'
import './Header.css';

class Header extends Component {

  state = {
    time: moment().format("dddd, MMMM Do YYYY, h:mm a"),
  }

  updateClock = () => {
    this.setState({
      time: moment().format("dddd, MMMM Do YYYY, h:mm a")
    })
  }


  componentDidMount() {
      setInterval(this.updateClock, 1000);
  }

  render() {
    return (
      <header>
        <ul className="left">
          <li><strong>Akshat</strong></li>
        </ul>
        <ul className="right">
          <li><a href="https://www.github.com/akshatnitd" target='_blank'><i className="fa fa-github"></i></a></li>
          <li><a href="https://www.facebook.com/akshatnitd" target='_blank'><i className="fa fa-facebook"></i></a></li>
          <li><a href="https://linkedin.com/in/akshatnitd" target='_blank'><i className="fa fa-linkedin"></i></a></li>
          <li><a href="https://www.twitter.com/@tweet_akshat" target='_blank'><i className="fa fa-twitter"></i></a></li>
          <li>{this.state.time}</li>
          <li>Akshat Garg</li>
        </ul>
      </header>
    );
  }
}

export default Header;
