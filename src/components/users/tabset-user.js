import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addClient } from "../../utils";
import { toast } from "react-toastify";

const TabsetUser = () => {

	const [first_name, setFirstName] = useState("")
	const [last_name, setLastName] = useState("")
	const [id, setId] = useState(0)

	const onAddClient = () => {
		addClient({
			name: `${first_name} ${last_name}`,
			id: id
		})
		toast.success("Client Added Successfully");
		setFirstName("")
		setLastName("")
		setId("")

	}

	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">Client</Tab>
				</TabList>
				<TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<h4>CLient Details</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> First Name
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom0"
									onChange={(e) => setFirstName(e.target.value)}
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Last Name
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom1"
									onChange={(e) => setLastName(e.target.value)}
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Email
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom2"
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Client Id
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									onChange={(e) => setId(e.target.value)}
									id="validationCustom3"
									type="number"
									required=""
								/>
							</div>
						</FormGroup>
					</Form>
				</TabPanel>

			</Tabs>
			<div className="pull-right">
				<Button type="button" color="primary" onClick={() => { onAddClient() }}>
					Save
				</Button>
			</div>
		</Fragment>
	);
};

export default TabsetUser;
