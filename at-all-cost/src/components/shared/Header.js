import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SelectSearch, {fuzzySearch} from 'react-select-search';

import * as actions from '../../actions';

import { Nav, Button, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap'

class Header extends React.Component {

    componentDidMount() {
		this.props.dispatch(actions.fetchTickers());
	}
    
    render() {
        if (this.props.tickers === null || this.props.tickers.length <= 0) {
			return <div>Loading...</div>
		}

        const countries = [
            {name: 'Swedish', value: 'sv'},
            {name: 'English', value: 'en'},
        ];

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '300px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    </Nav>
                    
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    
                    <SelectSearch
                        options={this.props.tickers}
                        search
                        filterOptions={fuzzySearch}
                        emptyMessage={() => <div style={{ textAlign: 'center', fontSize: '0.8em' }}>Not found renderer</div>}
                        placeholder="Select your country"
                    />
                    
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
		tickers: state.tickers.data
    };
}

export default connect(mapStateToProps)(Header);


