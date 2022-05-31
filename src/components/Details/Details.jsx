import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contactsContext } from '../contactsContext';

const Details = () => {
    const {getOneContact, oneContact} = useContext(contactsContext)
    
    const params = useParams()
    
    useEffect(()=> {
        getOneContact(params.id)
    }, [])
    
    console.log(oneContact);
    return oneContact? (
        <div>
            <div>Name: {oneContact.name}</div>
            <div>LastName: {oneContact.lastName}</div>
            <div>Phone: {oneContact.phone}</div>
        </div>
    ) : <h1>Loading...</h1>;
};

export default Details;