import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal } from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';
import CustomTable from '../../components/Table/Table';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {customerA} from '../../redux/_actions/categories/customerA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../utils/config';
const prevURL = _config[_config.environment].prevURL;

class Customers extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null
        }
    }

    componentDidMount() {
        document.title = "Customer List";
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {customers} = nextProps;
        const {action = '', loading = false, current = {}} = customers;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { customers, dispatch } = this.props;
        const {search = {}, pagination = {}} = customers;
        dispatch(customerA.getCustomers({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {customers, dispatch} = this.props;
        const {list = []} = customers;
        const find = _.find(list, {customerId: id});
        if(find) {
            dispatch(customerA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {customers, dispatch} = this.props;
        const {list = []} = customers;
        const find = _.find(list, {customerId: id});
        if(find) {
            dispatch(customerA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(customerA.modal(false));
    }

    onDelete() {
        const {customers} = this.props;
        const {current = {}} = customers;
        const id = current.customerId;
        if(id) this.props.dispatch(customerA.deleteCustomer({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {customers, dispatch} = this.props;
        let {search = {}, pagination = {}} = customers;
        search[name] = value;
        dispatch(customerA.handleSearch(value));
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log(value);
            this.getData(search, pagination);
        }, 500);
    }

    onPageChange(e, data) {
        const {activePage} = data;
        const {dispatch, search = {}, pagination = {}} = this.props;
        this.getData(search, {...pagination, currentPage: activePage - 1});
    }

    render() {
        const {customers} = this.props;
        const {open = false, current = {customerName: '', customerId: ''}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}} = customers;
        let list = [];
        _.forEach(customers.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['customerName', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.customerId;
            temp.push({
                cell: (<Fragment>
                    <Link to={prevURL + '/categories/customer-edit?id=' + id} >
                        <Button size="mini" icon onClick={() => this.handleUpdateRow(id)}>
                            <Icon name="pencil" />
                        </Button>
                    </Link>
                    <Button color="red" size="mini" icon onClick={() => this.handleDeleteRow(id)}>
                        <Icon name="delete" />
                    </Button>
                </Fragment>),
                props: {
                    textAlign: 'center'
                }
            });
            list.push(temp);
        });
        const header = [
            ['STT', 'Customer', 'Description', 'Created date', ''],
        ];
        return (
            <div>
                <DashboardLayout>
                    <Segment>
                        <Header>Customer List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            {/* <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Customer parent..." />
                            </Grid.Column> */}
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link to={prevURL + "/categories/customer-edit"}><Button primary>Add</Button></Link>
                            </Grid.Column>
                        </Grid>
                        <CustomTable
                            header={header}
                            body={list}
                            pagination={true}
                            paginationProps={{
                                defaultActivePage: pagination.currentPage + 1,
                                totalPages: pagination.countPage
                            }}
                            onPageChange={this.onPageChange.bind(this)}
                        />
                        <Modal size={'mini'} open={open} 
                            onClose={this.handleClose.bind(this)}
                            closeOnEscape={true}
                            closeOnDimmerClick={false}
                        >
                            <Modal.Header>Remove Customer</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove the Customer: {`"${current.customerName}"`}?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.onDelete.bind(this)} />
                            </Modal.Actions>
                        </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({ customers }) => ({ customers });

export default connect(mapStateToProps, null)(Customers);