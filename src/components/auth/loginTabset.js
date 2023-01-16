import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Unlock } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { loginUser, register } from "../../utils";
import { toast } from "react-toastify";

const LoginTabset = () => {
	const Login = () => toast.success("Login Successfully");
	const Register = () => toast.success("Register Successfully");

	const history = useNavigate();

	const clickActive = (event) => {
		document.querySelector(".nav-link").classList.remove("show");
		event.target.classList.add("show");
	};

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [username, setUsername] = useState("")

	const onRegister = async () => {
		const response = await register({
			name: username,
			email: email,
			password: password,
		})
		Register()
		console.log({ response })
		if (response.status) {
			history(`${process.env.PUBLIC_URL}/dashboard`);

		}
	};


	const onLogin = async () => {
		const response = await loginUser({
			email: email,
			password: password,
		})
		Login()
		if (response.status) {
			history(`${process.env.PUBLIC_URL}/dashboard`);
		}
	};

	return (
		<div>
			<Fragment>
				<Tabs>
					<TabList className="nav nav-tabs tab-coupon">
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<User />
							Login
						</Tab>
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<Unlock />
							Register
						</Tab>
					</TabList>

					<TabPanel>
						<Form className="form-horizontal auth-form">
							<FormGroup>
								<Input
									required=""
									name="login[username]"
									type="email"
									className="form-control"
									placeholder="Email"
									id="exampleInputEmail1"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</FormGroup>
							<div className="form-terms">
								<div className="custom-control custom-checkbox me-sm-2">
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani2"
											type="checkbox"
										/>
										Reminder Me{" "}
										<span className="pull-right">
											{" "}
											<a href="/#" className="btn btn-default forgot-pass p-0">
												lost your password
											</a>
										</span>
									</Label>
								</div>
							</div>
							<div className="form-button">
								<Button
									color="primary"
									onClick={() => onLogin()}
								>
									Login
								</Button>
							</div>
							<div className="form-footer">
								<span>Or Login up with social platforms</span>
								<ul className="social">
									<li>
										<a href="/#">
											<i className="icon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-instagram"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-pinterest-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</Form>
					</TabPanel>
					<TabPanel>
						<Form className="form-horizontal auth-form">
							<FormGroup>
								<Input
									required=""
									name="login[username]"
									type="text"
									className="form-control"
									placeholder="Username"
									id="exampleInputEmail12"
									onChange={(e) => setUsername(e.target.value)}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[username]"
									type="email"
									className="form-control"
									placeholder="Email"
									id="exampleInputEmail12"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									placeholder="Confirm Password"
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</FormGroup>
							<div className="form-terms">
								<div className="custom-control custom-checkbox me-sm-2">
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani2"
											type="checkbox"
										/>
										I agree all statements in{" "}
										<span>
											<a href="/#">Terms &amp; Conditions</a>
										</span>
									</Label>
								</div>
							</div>
							<div className="form-button">
								<Button
									color="primary"
									onClick={() => onRegister()}
								>
									Register
								</Button>
							</div>
							<div className="form-footer">
								<span>Or Sign up with social platforms</span>
								<ul className="social">
									<li>
										<a href="/#">
											<i className="icon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-instagram"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-pinterest-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</Form>
					</TabPanel>
				</Tabs>
			</Fragment>
		</div>
	);
};

export default LoginTabset;
