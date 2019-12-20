import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }
    // constructor (){
    //     super();
    //     this.handleIncerement=this.handleIncerement.bind(this)
    // }
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClassess()}> {this.formateCount()}</span>
                <button onClick={()=>this.handleIncerement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }


    handleIncerement = (id) => {
        console.log(id)
        this.setState({ count: this.state.count + 1 });
    }

    tags() {
        if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
        return this.state.tags.map((tag) => <li key={tag}>{tag}</li>)
    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ? "warning" : "primary")
        return classes
    }

    formateCount() {
        const { count } = this.state
        return count === 0 ? " zero " : count
    }
}

export default Counter;