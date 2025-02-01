import React, { useState } from "react";
import axios from "axios";

export default function Registerform() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("")


    const submitForm = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('endpoint', {
                name,
                email,
                password,
                phone
            });
            setMessage(response.data.message); //Display the message
        } catch (error) {
            setMessage("Error Submitting Data!")
            console.log(error);
        }
        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
    }


    return (
        <div className="flex justify-center items-center  mb-64 ">
            <form onSubmit={submitForm}
                className="flex flex-col w-96 gap-4 bg-slate-500 p-10 rounded-xl"
            >
                <p>{name}</p>
                <label className="font-bold text-sm -mb-4">Name</label>
                <input className="text-xl pl-2 font-sans rounded-md pt-3 pb-3"
                    type="text" name="name"
                    placeholder="Enter your Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="font-bold text-sm -mb-4">Email</label>
                <input className="text-xl pl-2 font-sans rounded-md pt-3 pb-3"
                    type="email" name="email"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="font-bold text-sm -mb-4" htmlFor="">Password</label>
                <input className="text-xl pl-2 font-sans rounded-md pt-3 pb-3"
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label className="font-bold text-sm -mb-4" htmlFor="">Phone Number</label>
                <input className="text-xl pl-2 font-sans rounded-md pt-3 pb-3"
                    type="text" name="phone"
                    placeholder="Enter you Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <p>{message}</p>
                <button type="submit" className="bg-blue-600 text-white rounded-lg w-40 self-center  p-2 ">Submit</button>
            </form>
        </div>
    )
}