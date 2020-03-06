import React from "react"

class Table extends React.Component {
    render() {
        const items = this.props.items;
        return (
            <div id="Table">
                <table>
                    <tbody>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Rating</th>
                        </tr>
                        {items.map(item => {
                            return (
                                <tr>
                                    <td>{item.song}</td>
                                    <td>{item.artist}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.rating}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table