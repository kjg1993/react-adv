import '../styles/styles.css';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password1"
                />

                <input
                    type="password"
                    placeholder="Repeat password"
                />

                <button type="submit"> Create </button>



            </form>
        </div>
    );
};

export default RegisterPage;
