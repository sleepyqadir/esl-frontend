import React, { Fragment } from "react";
import TabsetUser from "../users/tabset-user";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import CustomContainer from "./customVendor";

const Create_vendors = () => {
	return (
		<Fragment>
			<Breadcrumb title="Create Containers" parent="Containers" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Add Container</h5>
							</CardHeader>
							<CardBody>
								<CustomContainer />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Create_vendors;
