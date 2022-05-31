import React, { useContext, useState } from 'react';
import { contactsContext } from '../contactsContext';

const AddForm = () => {
    const { addContact } = useContext(contactsContext)
    // console.log(addContact);

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('') 

    function handleValues (){
        let newContact = {
            name, 
            lastName, 
            phone
        }
        if(!name.trim() || !lastName.trim() || !phone.trim()){
            alert("FILL IN FIRST!")
            return
        }
        // console.log(newContact);
        addContact(newContact)
        setName("")
        setLastName("")
        setPhone("")
    }
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='NAME'/>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='LASTNAME'/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='PHONE'/>
            <button onClick={() => handleValues()}>Save new contact</button>
        </div>
    );
};

export default AddForm;