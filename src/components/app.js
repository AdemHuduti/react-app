import React from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';

export default class UserRegistration extends React.Component {
    
    render () {
        return (
            <div className="container ">
            
                <div className="text-right violet size">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
                </div>
                <div className="row">
                    <div className="col-md-6 mt-5" >
                        <ul className="list-unstyled">
                            <li className="media">
                                <i className="fas fa-check fa-3x mr-4 mt-3"></i>
                                <div className="media-body">
                                <h2 className="mt-0 mb-1">Find out forcast</h2>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
                                </div>
                            </li>
                            <li className="media my-4">
                            <i className="fas fa-check fa-3x mr-4 mt-3 "></i>
                                <div className="media-body">
                                <h2 className="mt-0 mb-1">Simple TODO</h2>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                </div>
                            </li>
                            <li className="media">
                            <i className="fas fa-check fa-3x mr-4 mt-3 "></i>
                                <div className="media-body">
                                <h2 className="mt-0 mb-1">YouTube search</h2>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 mt-4">
                        <h2 className="display-4">Sign in </h2>
                        <div className="mx-auto text-left">
                            <form onSubmit={this.handleForm}>
                                <div className="form-group">
                                    <input className="form-control formCtrl"  aria-describedby="emailHelp" placeholder="First name" />
                                </div>
                                <div className="form-group">
                                    <input  className="form-control formCtrl"  aria-describedby="emailHelp" placeholder="Last last name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control formCtrl"  aria-describedby="emailHelp" placeholder="Email" />
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <Link to="pick" className="btn btn-primary ">
                                    Submit
                                </Link>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>

        );
    };
};