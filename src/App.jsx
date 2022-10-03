import React, { Component } from "react";
import Banner from "./components/Banner.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
export default class App extends Component {
  // attribute only

  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <div className="" style={{ display: "flex" }}>
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    );
  }
}

// import React, { Component } from "react";
// import Navbar from "./components/Navbar.jsx";
// import { StyledContainer } from "./Styles.jsx";
// export default class App extends Component {
//   // attribute only
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1990,
//     };
//   }
//   changeColor = () => {
//     this.setState({ color: "blue" });
//   };
//   // function only
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: "yellow" });
//     }, 2000);
//   }
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Car props={this.state} />
//         <button onClick={this.changeColor}>click me</button>
//       </div>
//     );
//   }
// }

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Owner: "A tom",
//     };
//   }
//   componentDidMount() {
//     console.log(this.props);
//   }
//   render() {
//     return (
//       <>
//         {this.props.props.brand}
//         {this.props.props.year}
//         {this.state.Owner}
//       </>
//     );
//   }
// }
