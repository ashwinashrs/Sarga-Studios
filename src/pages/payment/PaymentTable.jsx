import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPen,
  faTrash,
  faBolt,
  faPlus,
  faSearch,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  InputGroup,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

const data = [
  {
    id: 1,
    custid: "001",
    name: "Arshad",
    email: "mkarshad099@gmail.com",
    phone: 9744658488,
  },
  {
    id: 2,
    custid: "002",
    name: "Muhsin",
    email: "muhsin@gmail.com",
    role: "Admin",
    phone: 9744658488,
  },
  {
    id: 3,
    custid: "003",
    name: "Ramees",
    email: "ramees@gmail.com",
    phone: 9744658488,
  },
  {
    id: 4,
    custid: "004",
    name: "Jabbar",
    email: "jabbar@gmail.com",
    phone: 9744658488,
  },
  {
    id: 5,
    custid: "005",
    name: "Shamnad",
    email: "shamnad@gmail.com",
    phone: 9744658488,
  },
  {
    id: 6,
    custid: "006",
    name: "Vyshanavi",
    email: "vyshanavi@gmail.com",
    phone: 9744658488,
  },
  {
    id: 7,
    custid: "007",
    name: "Vishnu",
    email: "vishnu@gmail.com",
    phone: 9744658488,
  },
  {
    id: 8,
    custid: "008",
    name: "Ajesh",
    email: "ajesh@gmail.com",
    phone: 9744658488,
  },
];

function PaymentTable() {
  const [records, setRecords] = useState(data);
  const [filterCount, setFilterCount] = useState(data.length);

  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
    setFilterCount(newData.length);
  };
  //   Delete

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [tableDataItems, setTableDataItems] = React.useState(data);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.title
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setTableDataItems((prevData) =>
          prevData.filter((item) => !selectedRows.includes(item))
        );
      }
    };

    return (
      <Button
        key="delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red" }}
        icon
      >
        Delete
      </Button>
    );
  }, [selectedRows, toggleCleared]);


  const columns = [
    {
      name: "Staff Id",
      selector: (row) => row.custid,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Contact No",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{}}>
          <Button className="me-2" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <FontAwesomeIcon icon={faEye} color="#70a51f" />
          </Button>
          <Button className="me-2" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <FontAwesomeIcon icon={faPen} color="#0b8faf" />
          </Button>
          <Button className="me-2" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <FontAwesomeIcon icon={faTrash} color="red" />
          </Button>
          <Button className="me-2" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <FontAwesomeIcon icon={faArrowRight} color="blue" />
          </Button>
        </div>
      ),
      width: "250px",
    },
  ];




  return (
    <div className="container" style={{ borderRadius: "10px" }}>
      <div className="text-start">
        <DataTable
          title={
            <Container style={{ width: "100%" ,}}>
              <Row>
                <Col xl={6} md={6} sm={12} xs={12} className="text-start mb-3">
                  <h3>PAYMENT</h3>
                </Col>
                <Col xl={6} md={6} sm={12} xs={12} className="text-end mb-3">
                  <InputGroup style={{ paddingLeft: "210px" }}>
                    <InputGroup.Text
                      style={{
                        background: "#3c4b64",
                        border: "1px solid #3c4b64",
                        fontSize: "medium",
                      }}
                    >
                      <FontAwesomeIcon icon={faSearch} color="#fff" />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                      onChange={handleFilter}
                      style={{
                        background: "transparent",
                        border: "1px solid #3c4b64",
                        fontSize: "medium",
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Container>
          }
          columns={columns}
          data={data}
          selectableRows
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10]}
          customStyles={{
            header: {
              style: {
                backgroundColor:"transprent",
                padding:"0"
              },
            },
            title: {
              style: {
                backgroundColor:"red"
              },
            },
            headRow: {
              style: {
                background: "#5f769c",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                
              },
            },
            headCells: {
              style: {
                fontWeight: "500",
                color: "#fff",
                fontSize: "medium",
                
              },
            },

            pagination: {
              style: {
                backgroundColor: "#5f769c",
                color: "#fff",
                fontSize: "medium",
                borderEndEndRadius: "10px",
                borderEndStartRadius: "10px",
              },
            },
            table: {
              style: {
                borderRadius: "15px",
              },
            },
            rows: {
              style: {
                background: "#F0FAFA",
                color: "#3c4b64",
                fontSize: "medium",
              },
            },
          }}
        ></DataTable>
        <InputGroup.Text
          style={{
            border: "1px solid #3c4b64",
            width: "8rem",
            position: "relative",
            bottom: "49px",
            left: "10px",
          }}
        >
          <FontAwesomeIcon icon={faBolt} className="me-2 " />
          Count{" "}
          <InputGroup.Text
            style={{
              marginLeft: "5px",
              backgroundColor: "#3c4b64",
              color: "#fff",
              height: "25px",
              width: "25px",
              justifyContent: "center",
            }}
          >
            {filterCount}
          </InputGroup.Text>
        </InputGroup.Text>
      </div>
    </div>
  );
}

export default PaymentTable;