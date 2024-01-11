import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash , faPlus} from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-bootstrap/Pagination'

function Enquiries() {
  

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      <Table striped hover style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <th> <Form.Check aria-label="option 1" /></th>
            <th>#</th>
            <th>Full Name</th>
            <th>Contact No</th>
            <th>Order</th>
            <th>Order Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <Form.Check aria-label="option 1" /></td>
            <td>1</td>
            <td>Mark Otto</td>
            <td>8593856881</td>
            <td>Visiting card</td>
            <td>12-2-23</td>
            <td style={{ textAlign: 'center', width: 'auto'}}>
              <Button variant="outline-info" >
                <FontAwesomeIcon icon={faEye} />
              </Button>{' '}
              <Button variant="outline-warning">
                <FontAwesomeIcon icon={faPen} />
              </Button>{' '}
              <Button variant="outline-danger">
                <FontAwesomeIcon icon={faTrash} />
              </Button>{' '}
              <Button variant="outline-primary">
                <FontAwesomeIcon icon={faPlus} />
              </Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
      <div style={{ textAlign: 'center' , justifyContent:'center' ,display:'flex'}}>
        <Pagination >
          <Pagination.First />
          <Pagination.Prev />
          {items}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  )
}

export default Enquiries