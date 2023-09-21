import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ComnCounter from './ComnCounter';

class ParentRenderProps extends Component {
    render() {
        return (
            <div>
                <ComnCounter render={(count, incrementCounter) => 
                    <ClickCounter count={count} incrementCounter={incrementCounter} />
                } />
                <ComnCounter render={(count, incrementCounter) => 
                    <HoverCounter count={count} incrementCounter={incrementCounter} />
                } />
            </div>
        )
    }
}

export default ParentRenderProps