import { useState } from "react";
import { serverTimestamp, collection, doc, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const Form = ({cart, total, clear, handleId}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: {name, phone, email},
            items: cart,
            total: total,
            date: serverTimestamp()
        }

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clear();
            updateprod();
        });
    }

    const updateprod = () => {
        const orderDoc = doc(db, 'orders', 'A29yVRkpjasoaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }
    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                />
                <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={handleChangePhone}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default Form;