import React from 'react'

export class SimpleComponent extends React.Component {
    render() {
        return <p>simple component {this.props.data && <span>with props data passed {this.props.data}</span>}
        <span> and async data with id {this.props.asyncData && this.props.asyncData.id}</span>
        </p>
    }
}