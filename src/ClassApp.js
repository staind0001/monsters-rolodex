import React,{Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/Card-list.component';
import { SearchBox } from './components/search-box/SearchBox.component';


class App extends Component {

    constructor(){
        super();
        this.state={
           monsters:[],
           searchField:'',
        };

    
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => this.setState({monsters:users}))
    }

    handleChange = e => this.setState({searchField:e.target.value})
    


    render(){
        const {monsters,searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rodolex</h1>
                <SearchBox 
                    placeholder='Search Monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}>
                
                </CardList>
          </div>
        );
    }
}


export default App;


