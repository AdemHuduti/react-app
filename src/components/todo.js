import React from 'react';
import { Link } from 'react-router-dom';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iNeedTo: [],
            listOfTodos: '',
            errors: ''
        };
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    onChangeInput(e) {
        this.setState({
            listOfTodos: e.target.value
        });
    }

    addTodo() {
        const oldValue = this.state.iNeedTo;
        this.setState({
            iNeedTo: oldValue.concat(this.state.listOfTodos)
        });
        this.setState({
            listOfTodos: ''
        });
        if(!this.state.listOfTodos) {
            this.setState(() => ({errors: 'Please enter a valid value. Click on the X and continue'}));
        }
        else {
            this.setState(() => ({errors: ''}))
        }   
    };

    randomItem() {
        const randomNum = Math.floor(Math.random() * this.state.iNeedTo.length);
        const myItems = this.state.iNeedTo[randomNum]
        alert( "You should: " + myItems);
    }

    onRemoveItems(item) {
        const oldItems = this.state.iNeedTo;
        const position = oldItems.indexOf(item);
        this.setState({
            iNeedTo: oldItems.filter((el, index) => {
                return index !== position
            })
        });
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('setting');
            const iNeedTo = JSON.parse(json);
            if(iNeedTo) {
                this.setState(() => ({ iNeedTo }))
            }    
        } catch (e) {
            // Nothing to do!
        }
    }
 
    componentDidUpdate(prevProps, prevState) {
        if(prevState.iNeedTo.length !== this.state.iNeedTo.length) {
            const json = JSON.stringify(this.state.iNeedTo);
            localStorage.setItem('setting', json)
        }
    }

    onDeleteAllItems() {
        this.setState({
            iNeedTo: []
        });
    }
    render() {

        const myTodo = this.state.iNeedTo.map((todo, index) => {
            return <li key={index} className="list-group-item text-left ">
                {todo}
                <button 
                    onClick={() => {this.onRemoveItems(todo)}}
                    className="btn btn-outline-danger btn-sm float-right ">
                    X</button>
            </li>
        });

        return (
            <div className="container text-center">
                <h1 className="display-4 bolder">Simple Todo App</h1>
                {this.state.errors && <h3 className="text-danger">{this.state.errors}</h3>}
                <ul className="col-md-4 mx-auto">
                    {myTodo}
                </ul>
                    <form onSubmit={this.onFormSubmit.bind(this)} >    
                        <input 
                        className="search-bar-TODO"
                        placeholder="I need to.." 
                        value={this.state.listOfTodos}
                        onChange={this.onChangeInput.bind(this)}
                        />
                        <p className="mt-4">    
                            <button onClick={this.addTodo.bind(this)} className="btn btn-6 btn-6d mr-2 " type="submit">Add</button>
                            <button onClick={this.randomItem.bind(this)} className="btn btn-6 btn-6d">I need to..</button>
                            <Link to="/pick"  className="btn btn-6 btn-6d ml-2">Back</Link>
                        </p>
                        <p>
                        <button onClick={this.onDeleteAllItems.bind(this)} className="btn btn-danger ml-2">Delete all</button>
                        </p>
                    </form>
            </div>
        );
    };
};   