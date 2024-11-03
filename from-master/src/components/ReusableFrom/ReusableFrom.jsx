
const ReusableFrom = ({ fromTitle, handleSubmit, submitBtnText = 'submit', children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const myData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(myData);
    }
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableFrom;