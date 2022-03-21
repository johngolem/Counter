import React, { Component } from 'react';




class Counter extends Component {

    state = {
        count:0,
        imageUrl:'https://picsum.photos/200',
        tags:['tag 1','tag 2', 'tag 3']
    };
    render() { 
        return (<React.Fragment>
            <img src={this.state.imageUrl} alt=' ' />
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button> 
            <ul>
                {this.state.tags.map(tag=> <li key={tag.id}>{ tag }</li>)}
            </ul>
            </React.Fragment>
    ); 
}

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

formatCount() {

    const {count} = this.state;
    return count === 0 ? "Zero" : count;
}
}
    
export default Counter;   