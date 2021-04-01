import React, {Component} from 'react';

class App extends Component {
  
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');}
    getmyStorage = () => {
      var myCookieData = document.getcookie("Year");
      var myLocalStorageData = localStorage.getItem('Paragon');
      var mySessionStorageData = sessionStorage.getItem('frontend');
    console.log(myCookieData);
    console.log(myLocalStorageData);
    console.log(mySessionStorageData);
      return (myCookieData, myLocalStorageData, mySessionStorageData);
    };
  render() { 
    return ( 
      <div className="App">
        <button onClick={this.setMyStorage}>Set Cookie</button>
      </div>);
  }
}
export default App;
