import React, {useEffect, useState} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import api from "../Utils/eShopApi";


function Makers(props) {

    const [makers, setMakers] = useState([]);
    const [makerName, setMakerName] = useState('')

    const getMakers = async () => {
        const res = await api.get('/makers')
        setMakers(res.data)
    }

    useEffect(() => {
        getMakers().catch(console.error)
    }, [])


    const addMakers = async (e) => {
        e.preventDefault();
        await api.post('/makers', {maker_name: makerName});
        await getMakers();
    }



    return (
        <>
            <Form onSubmit={addMakers}>
                <Form.Group className="mb-3 m-5" >
                    <Form.Label>Maker</Form.Label>
                    <Form.Control type="name" placeholder="Name"
                    value={makerName}
                    onChange={e => setMakerName(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="m-5">
                    ADD
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Maker Name</th>

                </tr>
                </thead>
                <tbody>
                {
                    makers.map((maker) => <tr key={maker.id}>
                        <td>{maker.id}</td>
                        <td>{maker.maker_name}</td>
                    </tr>)
                }
                </tbody>
            </Table>
        </>
    );
}

export default Makers;