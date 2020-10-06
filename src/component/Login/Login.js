import React, {Component} from 'react';
import './login.css'; 

class Login extends Component{

constructor (props){
    super(props);
    this.state = {
        username: "",
        pass : "",
    }
    this.getPHP = this.getPHP.bind(this);
}

    getPHP() {
        fetch(`http://localhost:3000/api/demo.php`, {
            method: 'POST',
            header: {
                
            },
            body: JSON.stringify({
                content : "test1",
            }),
        }).then(res => res.json());
    }

    render() {
        return (
            <>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                            onChange={e => this.setState ({username : e.target.value})}
                            value={this.state.username}
                            type="text"
                            className="form-control" 
                            id="text"
                            placeholder="masukkan username" 
                            required />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input 
                            onChange={e => this.setState ({pass : e.target.value})}
                            value={this.state.pass}
                            type="pass" 
                            id="pass"
                            className="form-control" placeholder="masukkan password" 
                            required />
                        </div>
                        <div className="tombol">
                        <button  
                        onClick={this.getPHP}
                        className="btn btn-primary"
                        id="submit">Login</button>
                        <a href="#">Daftar</a>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;