import React from "react"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from 'react-bootstrap/FormControl'
import Button from "react-bootstrap/Button";
import Logo from "../../img/login.jfif"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export const Signup = () => {
	return (
		<>
			<main>
				<div className="container pt-sm-5 mt-sm-5">
					<div className="row">
						<div className="col-lg-8">
								<img className="img-fluid img-thumbnail" src={Logo} id="logo" alt="Responsive-image"/>
						</div>
						<div className="col-lg-4 text-left">
							<h2>Sign Up</h2>
							<form>
								<div className="form-group mb-lg-4 mt-lg-4">
									<label>Name</label>
									<input type="text" className="form-control" placeholder="Name" />
								</div>
								<div className="form-group mb-lg-4">
									<label>Email:</label>
									<input type="email" className="form-control" placeholder="Email@gmail.com" />
								</div>
								<div className="form-group mb-lg-4">
									<label>Password:</label>
									<input type="password" className="form-control" placeholder="Password" />
								</div>
								<div className="form-group mb-lg-4">
									<label>Confirm Password:</label>
									<input type="password" className="form-control" placeholder="Re-Enter Password" />
								</div>
								<button type="submit" className="btn btn-primary btn-block mt-5 mb-1">Sign Up</button>
								<p className="forgot-password text-right">
									Already registered? <Link to="/signin">Sign In</Link>

								</p>
							</form>
						</div>
					</div>
				</div>
			</main>
		</>
	)
};