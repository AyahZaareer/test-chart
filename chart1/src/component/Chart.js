import React, { Component } from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

export class Chart extends Component {
    render() {
        return (
            <div >
                <div>
                <h5 style={{marginLeft:'1rem', marginBottom:'1.2rem', marginTop:'.5rem'}}>   Vehicle status<a href='#' style={{marginLeft:'5rem', textDecoration:'none'}}>details ></a></h5></div>
                <ListGroup as="ul">
                    <ListGroupItem as="li" active>
                        Active
                    </ListGroupItem>
                    <ListGroupItem as="li">Inactive</ListGroupItem>
                    <ListGroupItem as="li" disabled>
                        In Shop
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Chart

