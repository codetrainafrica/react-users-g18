import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>register form</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input name="email" className="form-control"type="email" placeholder="email"></input>
                </div>

                <div>
                    <label>passwordl</label>
                    <input name="passwordl" className="form-control"type="passwordl" placeholder="passwordl"></input>
                </div>
                <hr></hr>
                <button type="submit" className="btn btn" >join</button>







            </form>

            
        </div>
    );
}

export default Register;
