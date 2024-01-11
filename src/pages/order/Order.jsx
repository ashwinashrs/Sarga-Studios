import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash , faPlus} from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-bootstrap/Pagination'

function Order() {

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
            <th>Status</th>
            <th>Deadline</th>
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
            <td>
              <div style={{width:'60px',height:'30px',backgroundColor:'yellow',
              border:'1px solid yellow', borderRadius:'6px' }}>
 SPEND
              </div>
            </td>
            <td>20-2-23</td>
            <td style={{ textAlign: 'center', width: 'auto' }}>
  <Button variant="outline-info" style={{ borderColor: '#44536d', backgroundColor: 'white' }}>
    <FontAwesomeIcon icon={faEye} style={{ color: '#44536d' }} />
  </Button>{' '}
  <Button variant="outline-warning" style={{ borderColor: '#44536d', backgroundColor: 'white' }}>
    <FontAwesomeIcon icon={faPen} style={{ color: '#44536d' }} />
  </Button>{' '}
  <Button variant="outline-danger" style={{ borderColor: '#44536d', backgroundColor: 'white' }}>
    <FontAwesomeIcon icon={faTrash} style={{ color: '#44536d' }} />
  </Button>{' '}
  <Button variant="outline-primary" style={{ borderColor: '#44536d', backgroundColor: 'white' }}>
    <FontAwesomeIcon icon={faPlus} style={{ color: '#44536d' }} />
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

export default Order