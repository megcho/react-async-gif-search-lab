import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            currentGifs: []
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const query = e.target.children[0].value;
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.data)
            this.setState({
                currentGifs: data.data
            })
        })
    }

    render() {
        return (
            <div>
                {/* {console.log(this.state.currentGifs)}; */}
                <GifSearch onSubmit={this.onSubmit} />
                <GifList currentGifs={this.state.currentGifs} />
                {/* {console.log(this.state.currentGifs)} */}
            </div>
        )
    }
}