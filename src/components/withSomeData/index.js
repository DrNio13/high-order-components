import React from 'react'

export function withSomeData(Component) {
    return class WrappedComponentWithData extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                data: 'data from withSomeData'
            }
        }

        render() {
            return <Component {...this.props} data={this.state.data}></Component>
        }
    }
}