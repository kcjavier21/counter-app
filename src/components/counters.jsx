import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
    // ===== RENDER ======
    render() {
        const { counters, onIncrement, onDecrement, onDelete, onReset } = this.props;
        console.log('Counters - Rendered');
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >Reset
                </button>
                <br/>
                <div className="container"  style = {{left: '20px'}}>
                    {counters.map(counter => (
                        <Counter 
                            key={counter.id} 
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            counter={counter}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
