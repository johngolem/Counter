import React, { Component } from 'react';




class Counter extends Component {

    state = {
        count:0,
        imageUrl:'https://picsum.photos/200',
        tags:['tag 1','tag 2', 'tag 3']
    };
    render() { 
        return (<React.Fragment>
            <button className='btn btn-secondary btn-sm'>Increment</button> 
            <ul>
                {this.state.tags.map(tag=> <li key={tag.id}>{ tag }</li>)}
            </ul>
            </React.Fragment>
    ); 
}

}
    
export default Counter;   