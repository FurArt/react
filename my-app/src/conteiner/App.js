import React, {Component} from "react";
import CardList from '../components/CardList.js'
// import { robots } from './robots';
import SearchBox from '../components/SearchBox.js'
import './App.css'
import ScrollList from '../components/ScrollList.js'


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      SearchField: ''
    }
  }

  componentDidMount(){
    fetch(' https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      {robots:users}
    ))
    // console.log(this.state.robots);
    // this.setState({
    //   robots: robots
    // })
  }


  onSearchChange = (event) => {
    this.setState({
      SearchField: event.target.value
    })
  }
  render(){ 
    const filterRobots = this.state.robots.filter( robots => {
      return robots.name.toLowerCase()
      .includes(this.state.SearchField
      .toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return(<h1>Loading, please wait</h1>)
    } else {      
      return (
        <div className="tc">
          <h1>Robot family</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <ScrollList>
            <CardList robots={filterRobots} />
          </ScrollList>
        </div>
      )
    }
  }
}

export default App
