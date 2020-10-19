import React, { Component } from 'react';

class Counter extends Component {
    // ===== LIFECYCLE HOOKS =====
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    // ==== METHODS =====
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>;
    }
    

    // ==== RENDER ====
    render() { 
        const { counter, onIncrement, onDecrement, onDelete, children } = this.props;
        console.log('Counter - Rendered');
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-2">
                        {children}
                        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col-6">
                        <button 
                            onClick={() => onIncrement(counter)} 
                            className="btn btn-secondary btn-sm m-1"
                        >
                            +
                        </button>
                        <button 
                            onClick={() => onDecrement(counter)} 
                            className="btn btn-secondary btn-sm m-1"
                            disabled={this.props.counter.value === 0 ? "disable" : ""}
                        >
                            -
                        </button>
                        <button 
                            onClick={() => onDelete(counter.id)} 
                            className="btn btn-danger btn-sm m-1"
                        >
                            x
                        </button>
                        <br></br>
                    </div>
                </div>
            </React.Fragment>

         );
    }

    
}
 
export default Counter;
