//HOC === Higher Order Component === decorator
import React, {Component} from 'react'

//DecoratedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (OriginalComponent) => class ToggleItemDecorator extends Component {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
        openItemId: null
    }

    render() {
        return <OriginalComponent {...this.props}
                                  openItemId={this.state.openItemId}
                                  toggleItem={this.toggleItem}/>
    }

    toggleItem = id => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        if (id == this.state.openItemId) {
            this.setState({openItemId: null});
        } else {
            this.setState({openItemId: id});
        };
    }
}
