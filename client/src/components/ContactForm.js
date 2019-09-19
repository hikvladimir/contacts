import axios from  'axios';
import React, { useState } from 'react';
import { MDBContainer, MDBAlert, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';



const FormPage = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const onSend=(event)=>{
        event.preventDefault();
        console.log(event);

        setSuccess(false);
        axios.post('http://localhost:3001/contact/', {
            userName,
            email,
            massage,
        })
            .then(function (response) {
                console.log(response);
                setUserName('');
                setEmail('');
                setMessage('');
                setSuccess(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form onSubmit={onSend}>
                        <p className="h4 text-center mb-4">Write to us</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Your name
                        </label>
                        <input
                            type="text"
                            id="defaultFormContactNameEx"
                            className="form-control"
                            onChange={(event)=>setUserName(event.target.value)}
                            value={userName}
                        />
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="defaultFormContactEmailEx"
                            className="form-control"
                            onChange={(event)=>setEmail(event.target.value)}
                            value={email}
                        />

                        <br />
                        <label
                            htmlFor="defaultFormContactMessageEx"
                            className="grey-text"
                        >
                            Your message
                        </label>
                        <textarea
                            type="text"
                            id="defaultFormContactMessageEx"
                            className="form-control"
                            rows="3"
                            onChange={(event)=>setMessage(event.target.value)}
                            value={massage}
                        />
                        <div className="text-center mt-4">
                            <MDBBtn color="warning" outline type="submit">
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                    {
                        success &&
                        <MDBAlert color="success">
                            Ваше сообщение отправлено
                        </MDBAlert>
                    }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;