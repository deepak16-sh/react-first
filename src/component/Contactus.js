import React, { useState } from 'react'
import '../css/Contactus.css'
export default function Contactus() {
    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value })
    }

    const submitData = async (e) => {
        e.preventDefault();
        const { firstname, lastname, phone, email, address, message } = user;
        if (firstname && lastname && phone && email && address && message) {
            const res = await fetch('https://reactfirebase-86edf-default-rtdb.firebaseio.com/userRecords.json', {
                method: "POST",
                Headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    phone,
                    email,
                    address,
                    message,

                })
            }
            );
            if (res) {
                alert("Data Store");
                setuser({
                    firstname: "",
                    lastname: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                })
            }
            else {
                alert("Please fill the data");
            }
        }
        else{
            alert("Please fill the data");
        }
    }
    return (
        <React.Fragment>
            <section className="main_contact">
                <div className="contact_cont">
                    <div className="contact_data">
                        <h1 style={{ fontSize: "3rem" }}>Connect with our sales team.</h1>
                        <div className="cont_img">
                            <img src="./images/contact.jpg" alt="" />
                        </div>
                    </div>

                    <div className="contact_form">
                        <form action="" method="POST">
                            <div className="username">
                                <input type="text" placeholder="First Name" name="firstname" value={user.firstname} onChange={postUserData} style={{ width: "50%" }} />
                                <input type="text" placeholder="Last Name" name="lastname" value={user.lastname} onChange={postUserData} style={{ width: "50%" }} />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone NO" name="phone" value={user.phone} onChange={postUserData} style={{ width: "50%" }} />
                                <input type="text" placeholder="YOUR Email" name="email" value={user.email} onChange={postUserData} style={{ width: "50%" }} />
                            </div>
                            <div>
                                <input type="text" placeholder="Address" name="address" value={user.address} onChange={postUserData} style={{ width: "100%" }} />
                            </div>
                            <div>
                                <input type="text" placeholder="Enter your message" name="message" value={user.message} onChange={postUserData} style={{ width: "100%" }} />
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" /><span style={{ fontSize: "2rem", marginLeft: "1rem" }}>I agree that the DeepakPay may contact me at the email or phone no above</span>
                            </div>
                            <div>
                                <input type="submit" value="Submit" onClick={submitData} style={{ backgroundColor: "blueviolet", color: "white", width: "100%" }} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
