import React from "react";
import { App, Space } from "antd";
import Layout from "antd/es/layout/layout";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { SearchBar } from "./SearchBar";

export function MainApp (){
    return (
        <App>
            <Layout>
                <Header>
                    <Space style={{display: 'flex'}} direction="horizontal" align="center">
                        <SearchBar style={{}}/>
                    </Space>
                </Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </App>
    );
}