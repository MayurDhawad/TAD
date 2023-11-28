import React, { useEffect, useState } from 'react'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, } from "reactstrap";
import axios from 'axios';

import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const UserList = () => {

    const [activeTab, setActiveTab] = useState(1);

    const [usersList, setUsersList] = useState([]);
    const [contactList, setContactList] = useState([]);
    const [emailerList, setEmailerList] = useState([]);
    const [hireList, setHireList] = useState([]);
    const [examList, setExamList] = useState([]);

    useEffect(() => {
        getUsersList();
        getContactList();
        getEmailerList();
        getHireList();
        getExamList();
    }, [])


    const getUsersList = () => {
        const method = "/user-list";
        axios.get(process.env.REACT_APP_NODE_URL + method)
            .then((res) => {
                setUsersList(res.data.usersList)
                // console.log(res.data.usersList);
            })
            .catch((err) => { console.log(err) });
    }

    const getContactList = () => {
        const method = "/contact-list";
        axios.get(process.env.REACT_APP_NODE_URL + method)
            .then((res) => {
                setContactList(res.data.usersList)
                // console.log(res.data.usersList);
            })
            .catch((err) => { console.log(err) });
    }

    const getEmailerList = () => {
        const method = "/emailer-list";
        axios.get(process.env.REACT_APP_NODE_URL + method)
            .then((res) => {
                setEmailerList(res.data.usersList)
                // console.log(res.data.usersList);
            })
            .catch((err) => { console.log(err) });
    }

    const getHireList = () => {
        const method = "/hire-list";
        axios.get(process.env.REACT_APP_NODE_URL + method)
            .then((res) => {
                setHireList(res.data.hireList)
            })
            .catch((err) => { console.log(err) });
    }

    const getExamList = () => {
        const method = "/exam-list";
        axios.get(process.env.REACT_APP_NODE_URL + method)
            .then((res) => {
                setExamList(res.data.examsList)
            })
            .catch((err) => { console.log(err) });
    }

    const usercolumns = [
        {
            name: 'Fullname',
            selector: row => row.userName,
            sortable: true,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Language',
            selector: row => row.language,
            sortable: true,
        },
        {
            name: 'Timestamp',
            selector: row => new Date(row.createdAt).toDateString() + "-" + new Date(row.createdAt).toLocaleTimeString(),
        }
    ];

    const contactcolumns = [
        {
            name: 'Fullname',
            selector: row => row.userName,
            sortable: true,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Looking for',
            selector: row => row.lookingFor,
            sortable: true,
        },
        {
            name: 'Query',
            selector: row => row.query,
            sortable: true,
        },
        {
            name: 'Timestamp',
            selector: row => new Date(row.createdAt).toDateString() + "-" + new Date(row.createdAt).toLocaleTimeString(),
        }
    ];

    const emailercolumns = [
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Timestamp',
            selector: row => new Date(row.createdAt).toDateString() + "-" + new Date(row.createdAt).toLocaleTimeString(),
        }
    ];

    const tableSettings = {
        print: false,
        export: false,
    }

    const hirecolumns = [
        {
            name: 'Fullname',
            selector: row => row.userName,
            sortable: true,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Company',
            selector: row => row.companyName,
            sortable: true,
        },
        {
            name: 'Timestamp',
            selector: row => new Date(row.createdAt).toDateString() + "-" + new Date(row.createdAt).toLocaleTimeString(),
        }
    ];

    const examcolumns = [
        {
            name: 'Fullname',
            selector: row => row.userName,
            sortable: true,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Course',
            selector: row => row.course,
            sortable: true,
        },
        {
            name: 'Timestamp',
            selector: row => new Date(row.createdAt).toDateString() + "-" + new Date(row.createdAt).toLocaleTimeString(),
        }
    ];
    

    return (
        <div className='user-list-main'>
            <Container>
                <Nav pills className='pt-4 pb-4 pb-sm-1'>
                    <NavItem>
                        <button
                            className={"common-btn px-3 py-2 me-3 " + (activeTab === 1 ? ("red") : "")}
                            onClick={() => { setActiveTab(1) }}
                        >
                            Leadgen
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                            className={"common-btn px-3 py-2 me-3 " + (activeTab === 2 ? ("red") : "")}
                            onClick={() => { setActiveTab(2) }}
                        >
                            Contact Us
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                            className={"common-btn px-3 py-2 me-3 " + (activeTab === 3 ? ("red") : "")}
                            onClick={() => { setActiveTab(3) }}
                        >
                            Emailer
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                            className={"common-btn px-3 py-2 me-3 " + (activeTab === 4 ? ("red") : "")}
                            onClick={() => { setActiveTab(4) }}
                        >
                            Hiring
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                            className={"common-btn px-3 py-2 " + (activeTab === 5 ? ("red") : "")}
                            onClick={() => { setActiveTab(5) }}
                        >
                            Entrance Exam
                        </button>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="pb-3">
                    <TabPane tabId={1}>
                        <DataTableExtensions columns={usercolumns} data={usersList} {...tableSettings}>
                            <DataTable columns={usercolumns} data={usersList} pagination />
                        </DataTableExtensions>
                    </TabPane>
                    <TabPane tabId={2}>
                        <DataTableExtensions columns={contactcolumns} data={contactList}  {...tableSettings}>
                            <DataTable columns={contactcolumns} data={contactList} pagination />
                        </DataTableExtensions>
                    </TabPane>
                    <TabPane tabId={3}>
                        <DataTableExtensions columns={emailercolumns} data={emailerList} {...tableSettings}>
                            <DataTable columns={emailercolumns} data={emailerList} pagination />
                        </DataTableExtensions>
                    </TabPane>
                    <TabPane tabId={4}>
                        <DataTableExtensions columns={hirecolumns} data={hireList} {...tableSettings}>
                            <DataTable columns={hireList} data={hireList} pagination />
                        </DataTableExtensions>
                    </TabPane>
                    <TabPane tabId={5}>
                        <DataTableExtensions columns={examcolumns} data={examList} {...tableSettings}>
                            <DataTable columns={examcolumns} data={examList} pagination />
                        </DataTableExtensions>
                    </TabPane>
                </TabContent>
            </Container>
        </div>
    )
}

export default UserList