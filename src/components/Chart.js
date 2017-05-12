import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Chart extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        return (
            <div ref={this.getContainerRef}>
                
            </div>
        )
    }

    getContainerRef = ref => {
        console.log("~~~ref~~~", ref);
        this.container = ref;
        if(!ref) {
            return;
        }
    }
}

export default Chart