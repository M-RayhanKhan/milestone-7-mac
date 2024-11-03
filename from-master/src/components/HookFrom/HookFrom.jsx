import useInputState from "../../Hooks/Hooks";

const HookFrom = () => {

    // const [name, handleNameChange] = useInputState('hooks from')
    const emailState = useInputState('kk@jm.com')
    const passwordState = useInputState(null)
    // console.log(emailState);
    console.log(passwordState);

    const handleSubmit = e => {
        e.preventDefault()
        console.log('from data',emailState.value);
        console.log('from pass',passwordState.value);
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"  /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input {...passwordState} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom;