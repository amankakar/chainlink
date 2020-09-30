import React, { Component } from "react";
import logo from "./logo.svg";
import Web3 from "web3";

import "./App.css";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    let web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch (error) {
        console.error(error);
      }
    } else if (web3) {
      // for old DApps browser
      web3 = new Web3(web3.currentProvider);
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      return alert(
        '"Non-Ethereum browser detected. You should consider trying MetaMask!"'
      );
    }

    // web3 = new Web3(window.web3.currentProvider);
    if (web3 !== "undefined" || web3 !== undefined) {
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
    }
  }

  constructor(props) {
    super(props);
    this.state = { account: "" };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <p>Your account: {this.state.account}</p>
        </header>
      </div>
    );
  }
}

export default App;
