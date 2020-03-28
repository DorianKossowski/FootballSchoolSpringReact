import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class GenericTableRow extends Component {
    state = {
        redirect : false,
        id : ''
    }

    componentDidMount() {
        const {params} = this.props;
        this.setState({id : params['id'] ?? '0'});
        delete params['id'];
    }

    handleOnClick = () => {
        this.setState({redirect: true});
      }
    
    render() {
        if (this.state.redirect) {
            const editPath = '/edit/' + this.state.id;
            return <Redirect push to={editPath} />;
        }

        const {params} = this.props;
        return (
            <tr>
                { Object.values(params).map((val, idx) => this.getCell(this.state.id + '_' + idx, val)) }
            </tr>
        );
    }

    getCell(key, val) {
        const Tag = this.getTag();
        const clickAction = this.props.link ? this.handleOnClick : null;
        const style = this.props.link ? 'clickableRow' : '';
        return (
            <Tag onClick={clickAction} className={style} key={key}>{val}</Tag>
        );
    }

    getTag() {
        return 'td';
    }
}

export default GenericTableRow;