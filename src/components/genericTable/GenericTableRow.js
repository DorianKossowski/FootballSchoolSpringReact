import React, { Component } from 'react';

class GenericTableRow extends Component {
    
    render() {
        const {params} = this.props;
        const id = params['id'] ?? '0';
        delete params['id'];
        return (
            <tr>
                { Object.values(params).map((val, idx) => this.getCell(id + '_' + idx, val)) }
            </tr>
        );
    }

    getCell(key, val) {
        const Tag = this.getTag();
        return (
            <Tag key={key}>{val}</Tag>
        );
    }

    getTag() {
        return 'td';
    }
}

export default GenericTableRow;