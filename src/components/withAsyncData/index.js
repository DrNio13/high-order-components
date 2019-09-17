import React from 'react'

export function withAsyncData(Component) {
    return class WrappedComponentWithData extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                asyncData: null
            }
        }

        async componentDidMount() {

            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        asyncData: json 
                    })
                })
        }

        render() {
            return <Component {...this.props} asyncData={this.state.asyncData}></Component>
        }
    }
}