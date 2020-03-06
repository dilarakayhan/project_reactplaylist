import React from "react"
import Form from "./components/Form"
import Table from "./components/Table"

class Container extends React.Component {
    constructor() {
        super();

        this.state = {
            song: "",
            artist: "",
            genre: "",
            rating: "",
            items: []
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        let items = [...this.state.items];

        items.push({
            song: this.state.song,
            artist: this.state.artist,
            genre: this.state.genre,
            rating: this.state.rating
        });

        this.setState({
            items,
            song: "",
            artist: "",
            genre: "",
            rating: ""

        });
    };

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="App">
                <Form
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    newSong={this.state.song}
                    newArtist={this.state.artist} />
                <Table
                    items={this.state.items} />
            </div>
        );
    }
}

export default Container