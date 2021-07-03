import React from 'react';

export default class GifList extends React.Component {

    constructor(props) {
        super()
        this.state = {
            gifs: props.currentGifs
        }
    }

    showGifs() {
        if (this.props.currentGifs[1]) {
            return (
                <ul>
                    <li> <img src={this.props.currentGifs[0].images.original.url} /> </li>
                    <li> <img src={this.props.currentGifs[1].images.original.url} /> </li>
                    <li> <img src={this.props.currentGifs[2].images.original.url} /> </li>
                </ul>
            )
        }
        else {
            return null;
        }
    }

    render() {
        // console.log(this.props.currentGifs)
        return (
            this.showGifs()
        )

    }
}