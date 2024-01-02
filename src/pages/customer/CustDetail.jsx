import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-bootstrap/Pagination';

function CustDetail() {
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <tr>
      <td> <Form.Check aria-label="option 1" /></td>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td style={{ textAlign: 'center', width: 'auto' }}>
        <Button
          variant="outline-info"
          style={{ backgroundColor: 'white', borderColor: '#44536d' }}
          className="hover-button"
        >
          <FontAwesomeIcon icon={faEye} style={{ color: '#44536d' }} />
        </Button>{' '}
        <Button
          variant="outline-warning"
          style={{ backgroundColor: 'white', borderColor: '#44536d' }}
          className="hover-button"
        >
          <FontAwesomeIcon icon={faPen} style={{ color: '#44536d' }} />
        </Button>{' '}
        <Button
          variant="outline-danger"
          style={{ backgroundColor: 'white', borderColor: '#44536d' }}
          className="hover-button"
        >
          <FontAwesomeIcon icon={faTrash} style={{ color: '#44536d' }} />
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
  );
}

export default CustDetail;
