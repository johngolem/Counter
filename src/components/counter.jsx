import React, { Component } from 'react';




class Counter extends Component {

    state = {
        count:0,
        imageUrl:'https://picsum.photos/200',
        tags:['tag 1','tag 2', 'tag 3']
    };

    renderTags () {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>
                    {this.state.tags.map(tag=> <li key={tag.id}>{ tag }</li>)}
            </ul>
    }


    render() { 
        return (<React.Fragment>
            <button className='btn btn-secondary btn-sm'>Increment</button> 
            {this.renderTags()}
            </React.Fragment>
    ); 
}

}
    
export default Counter;   