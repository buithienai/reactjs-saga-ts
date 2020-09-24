import React, { Component } from 'react';
import * as services from '../../redux/services';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers/index';
import { Dispatch } from 'redux';
import { userActions } from '../../redux/actions/index';
import Root from '../commons/Root';
import { ACTIVE_MENU } from '../../constants';

interface Props {
    title: string;
    userReducer: {
        firstName: string;
        lastName: string;
        email: string;
    };
    updateUser: () => void;
}

interface User {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
}

interface State {
    page: number;
    listUser: User[];
}

class Table extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            page: 2,
            listUser: [],
        };
    }

    componentDidMount() {
        const { page } = this.state;

        this.props.updateUser();
        this.getListUser(page);
    }

    getListUser = async (page: number) => {
        try {
            let response = await services.userServices.getListUser(page);

            if (response.status !== 200) {
                toast.error(response.data.message);
                return false;
            }

            this.setState({
                listUser: response.data.data,
            });
        } catch (error) {
            if (error.data) {
                toast.error(error.data.message);
            }
            console.log(error);
        }
    };

    renderTableUser = () => {
        const { listUser } = this.state;
        let html: any[] = [];

        listUser.map((item, index) => {
            return html.push(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>,
            );
        });

        return html;
    };

    render() {
        const { firstName, lastName, email } = this.props.userReducer;
        const { title } = this.props;

        return (
            <Root active={ACTIVE_MENU.USERS}>
                <h3>{title}</h3>
                <div>
                    {firstName} {lastName}
                </div>
                <div>{email}</div>
                <table>
                    <tbody>{this.renderTableUser()}</tbody>
                </table>
            </Root>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    userReducer: state.userReducers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateUser: () => {
        dispatch(userActions.UpdateDataUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
