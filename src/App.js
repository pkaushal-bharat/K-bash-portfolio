import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './shared/Modal';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  state = {
    isOpen: true
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    })
  }

    modalToggle = (ele) => {
      ele.target.classList.remove("jump");
      ele.target.classList.add("jump");
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen
      }))
  }


  jump = (ele) => {
    ele.target.classList.remove("jump");
    ele.target.classList.add("jump");
}

  render() {
    return (
      <div className="App">
        <Header />
        <Modal isOpen={this.state.isOpen} closeModal={this.closeModal}>
        </Modal>
        <Footer modalToggle={this.modalToggle} jump={this.jump} />
      </div>
    );
  }
}

export default App;
