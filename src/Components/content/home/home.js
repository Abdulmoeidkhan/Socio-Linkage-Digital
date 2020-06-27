import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import "./home.css"
import Gallery from "../../galleryCaraousel/galleryCaraousel"
import Cards from "../card/card.js"
const { Content } = Layout;

export const HomeContent = () => (
    <Content>
        <div style={{ margin: '0px 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    Home
                </Breadcrumb.Item>
            </Breadcrumb>
            <Gallery />
            <Cards />
        </div>
    </Content>
)
