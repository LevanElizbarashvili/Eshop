import React, {useEffect, useState} from "react";
import {Button, Form, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../Utils/eShopApi'

export default function Categories(props) {


    const [categories, setCategories] = useState([]);
    const [formValues, setFormValues] = useState({
        categoryName: "",
        parentId: ""
    })


    const getCategories = async () => {
        const response = await api.get('/categories')
        setCategories(response.data)
    }


    useEffect(() => {
        getCategories().catch(console.error)
    },[]);


    const addCategory = async (event) => {
        event.preventDefault();
       await api.post('/categories', {parent_id: formValues.parentId, category_name: formValues.categoryName})
       await getCategories()
    }


    return (
<>
        <Form onSubmit={addCategory}>
            <Form.Group className="mb-3 m-5" >
                <Form.Label>Category</Form.Label>
                <Form.Control type="name" placeholder="Category Name"
                              value={formValues.categoryName}
                              onChange={event => setFormValues({...formValues, categoryName: event.target.value})}
                />
            </Form.Group>
            <Form.Group className="mb-3 m-5">
                <Form.Label>Parent ID</Form.Label>
                <Form.Control type="name" placeholder="Parent ID"
                              value={formValues.parentId}
                              onChange={event => setFormValues({...formValues, parentId: event.target.value})}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="m-5">
                ADD
            </Button>
        </Form>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Parent ID</th>
            </tr>
            </thead>
            <tbody>
            {
                categories.map((category) => <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.category_name}</td>
                        <td>{category.parent_id}</td>
                    </tr>)
            }
            </tbody>
        </Table>
    </>
    )
}