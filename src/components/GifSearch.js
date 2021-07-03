
import React from 'react';

export default class GifSearch extends React.Component {



    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input id="gif-input" type="text" />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}