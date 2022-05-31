import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { contactsContext } from '../contactsContext';

const EditForm = () => {
    const {getOneContact, oneContact, updateContact} = useContext(contactsContext)
    const params = useParams()
    const navigate = useNavigate()
    
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    
    useEffect(() => {
        getOneContact(params.id)
    }, []) // если массив зависимостей пустой, функция отраб 1 раз

    useEffect(() => {
        if(oneContact){
            setName(oneContact.name)
            setLastName(oneContact.lastName)
            setPhone(oneContact.phone)
        }
    }, [oneContact])

    function handleValues(){
        let editedContact = {
            name, 
            lastName, 
            phone
        }
        updateContact(params.id, editedContact)
        navigate("/contacts")
    }

    return oneContact ?  (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name'/>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='LastName'/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Phone'/>
            <button onClick={() => handleValues()}>Save Edit</button>
        </div>
    ) : <h1>Loading...</h1>;
};

export default EditForm;