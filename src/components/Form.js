import React from "react"

class Form extends React.Component {
    render() {
        return (
            <div id="Form">
                <form onSubmit={this.props.handleFormSubmit}>
                    <input id="song"
                        value={this.props.newSong}
                        type="search"
                        name="song"
                        placeholder="add a song title"
                        onChange={this.props.handleInputChange}
                    />

                    <input id="artist"
                        value={this.props.newArtist}
                        type="search"
                        name="artist"
                        placeholder="add an artist title"
                        onChange={this.props.handleInputChange}
                    />

                    <select
                        className="custom-select"
                        name="genre"
                        onChange={this.props.handleInputChange}
                        defaultValue={"default"}
                    >
                        <option value="default" disabled selected>
                            select a genre
                        </option>
                        <option value="Rock">
                            Rock
                        </option>
                        <option value="Metal">
                            Metal
                        </option>
                        <option value="Pop">
                            Pop
                        </option>
                        <option value="Edm">
                            EDM
                        </option>
                    </select>

                    <select
                        name="rating"
                        onChange={this.props.handleInputChange}
                        defaultValue={"default"}
                    >
                        <option value="default" disabled>rate your song</option>
                        <option value="⭐">
                            ⭐
                        </option>
                        <option value="⭐⭐">
                            ⭐⭐
                        </option>
                        <option value="⭐⭐⭐">
                            ⭐⭐⭐
                        </option>
                        <option value="⭐⭐⭐⭐">
                            ⭐⭐⭐⭐
                        </option>
                        <option value="⭐⭐⭐⭐⭐">
                            ⭐⭐⭐⭐⭐
                        </option>
                    </select>

                    <button
                        type="submit"
                        value="Submit"
                    >
                        Add
                    </button>

                </form>
            </div>
        );
    }
}

export default Form