import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import "./about.css"
import {
    Link
} from "react-router-dom";

const { Content } = Layout;

export const AboutUs = () => (
    <Content className="pageContentClass">
        <div style={{ margin: '0px 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/">
                        Home
                </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/aboutUs">
                        About Us
                </Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h2 className="pageHeading">About Us</h2>
                <span className="aboutUsPageMobileDisplayBlock">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img className="gifImagePos" src={require("../../icons/Socio.gif")} alt={require("../../icons/Socio.gif")}/>
                </span>
                <h3 className="pageSubHeading">Who are we?</h3>
                <p className="pageParagraphClass">
                    Socio-linkage is a joint venture/startup by the students of the University of Karachi from the Department of Social Work. We strive to provide digital and quick access to the users in finding appropriate places for the fulfillment of their physical, mental, environmental, and social needs.
        </p>
                <h3 className="pageSubHeading">What inspired us?</h3>
                <p className="pageParagraphClass">
                    The inspiration behind the socio-linkage project was based on the field visits that we conducted throughout our academic journey, we realized the work of various organizations that were working for the betterment of society in their domain was not getting the optimum recognition that they deserve, thus Socio-Linkage is an attempt to promote and connect people.
        </p>
                <h3 className="pageSubHeading">What we plan to do?</h3>
                <ul className="pageParagraphClass">
                    <li>Socio-linkage’s motive is to highlight the unfamiliar organizations and promote startups that need recognition for their immense anticipation towards mankind and its betterment. </li>
                    <br />
                    <li>Our experts will be providing honest reviews and recommendations to its users about the organization/ Ngo they may choose to get connected with and helps to find the closest organization from their location. </li>
                    <br />
                    <li>Another prospect of Socio-linkage is to connect people with the latest news related to the social aspect around the globe and articles that depict researches or analysis highlighting social paradigms.</li>
                </ul>
            </div>
        </div>
    </Content>
)
