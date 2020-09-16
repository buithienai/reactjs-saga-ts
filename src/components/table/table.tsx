import React, { Component } from 'react';

interface Props {
    titleTable: string;
    handleChange: (data: object) => void;
}

class Table extends Component<Props> {
    render() {
        const { titleTable } = this.props;

        return (
            <>
                <h3
                    onClick={() => this.props.handleChange({ titleTable: "ABC" })}
                >{titleTable}</h3>
                <table>
                </table>
            </>
        );
    }
}

export default Table;