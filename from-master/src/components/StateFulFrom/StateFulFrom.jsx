import { useState } from "react";

const StateFulFrom = () => {
    const [name, setName] = useState('King Khan')
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null)

    const handleSubmit = e => {
     e.preventDefault()
     if (password.length < 6) {
        setError('Password must be 6 characters or longer')
     }else{
         setError('')
         console.log(email, password, name);
     }


    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"  />
                <br />
                <input 
                onChange={handleEmailChange}
               type="email" name="email" id="" />
                <br />
                <input onChange={handleChangePassword} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulFrom;