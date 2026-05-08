import React,{ Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";

const state = {

}
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        console.log(event.target.value);
        
    }
    render() {
        const fileteredRobots = this.state.robots.filter(robotos => {
            return robots.name.tolowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1> RoboFriends </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={fileteredRobots } />
            </div>
        );
    }
}
export default App;