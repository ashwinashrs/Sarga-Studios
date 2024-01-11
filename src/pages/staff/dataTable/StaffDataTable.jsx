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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  InputGroup,
  Row,
  Col,
  Form,
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import StaffModelBox from "../StaffModelBox";
import StaffSalaryForm from '../staffsalary/StaffSalaryForm'
// import AdminModelBox from "../admin/AdminModelBox";

const StaffDataTabl = () => {
  //   const handleShow = () => setShow(true)

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
      name: "Role",
      selector: (row) => row.role,
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
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown">
              <FontAwesomeIcon icon={faBars} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <FontAwesomeIcon icon={faEye} color="#70a51f" /> View
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <FontAwesomeIcon icon={faPen} color="#0b8faf" /> Edit
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <FontAwesomeIcon icon={faTrash} color="red" /> Remove
              </Dropdown.Item>
              <Dropdown.Item onClick={handleArrowRightClick}>
                <FontAwesomeIcon icon={faArrowRight} color="blue" /> More
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ),
      width:'100px'
      
    },
  ];
  const data = [
    {
      id: 1,
      custid: "001",
      name: "Arshad",
      role: "Admin",
      email: "mkarshad099@gmail.com",
      phone: 9744658488,
    },
    {
      id: 2,
      custid: "002",
      name: "Muhsin",
      role: "Admin",
      email: "muhsin@gmail.com",
      role: "Admin",
      phone: 9744658488,
    },
    {
      id: 3,
      custid: "003",
      name: "Ramees",
      email: "ramees@gmail.com",
      role: "Admin",
      phone: 9744658488,
    },
    {
      id: 4,
      custid: "004",
      name: "Jabbar",
      email: "jabbar@gmail.com",
      role: "Admin",
      phone: 9744658488,
    },
    {
      id: 5,
      custid: "005",
      name: "Shamnad",
      email: "shamnad@gmail.com",
      role: "Admin",
      phone: 9744658488,
    },
    {
      id: 6,
      custid: "006",
      name: "Vyshanavi",
      email: "vyshanavi@gmail.com",
      role: "Admin",
      phone: 9744658488,
    },
    {
      id: 7,
      custid: "007",
      name: "Vishnu",
      email: "vishnu@gmail.com",
      role: "Admin",
      phone: 9744658488,
    },
    {
      id: 8,
      custid: "008",
      name: "Ajesh",
      email: "ajesh@gmail.com",
      role: "Admin",
      phone: 9744658488,
    },
  ];
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArrowRightClick = () => {
    setIsModalOpen(true);
  };

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

  return (
    <div className="container" style={{ borderRadius: "10px" }}>
      <div className="text-start">
        <DataTable
          title={
            <div style={{ fontSize: "2rem", fontWeight: "500" }}>
            Staff Register
            </div>
          }
          columns={columns}
          data={records}
          expandableRows
          selectableRows
          contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
          fixedHeader
          fixedHeaderScrollHeight="350px"
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10]}
          subHeader
          subHeaderComponent={
            <div style={{ width: "100%" }}>
              <Container>
                <Row>
                  <Col xl={6} md={6} sm={12} xs={12}
                    className="text-start mb-3"
                  >
                    <StaffModelBox />
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
            </div>
          }
          customStyles={{
            header: {
              style: {
                backgroundColor:"transprent",
                padding:"0"
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
            title: {
              style: {
                fontSize: "20px",
                fontWeight: "700",
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
            subHeader: {
              style: {
                padding: "0",
                backgroundColor:"transparent"
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


      <Modal size="lg" show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>SALARY MANAGING</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <StaffSalaryForm/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default StaffDataTabl;
