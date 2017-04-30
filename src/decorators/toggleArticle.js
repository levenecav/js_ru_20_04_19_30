//HOC === Higher Order Component === decorator
import React, {Component as BasicComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends BasicComponent {
    state = {
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props}
                                  openArticleId={this.state.openArticleId}
                                  toggleArticle={this.toggleArticle}/>
    }

    toggleArticle = id => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        if (id == this.state.openArticleId) {
            this.setState({openArticleId: null});
        } else {
            this.setState({openArticleId: id});
        };
    }
}