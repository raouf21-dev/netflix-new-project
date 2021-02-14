import React, { Component } from 'react';
import TabsComponent from '../components/TabsComponent';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ShowCase from '../components/ShowCase';

class Main extends Component {
    render() {
        return (
            <div>
                <ShowCase/>
                <TabsComponent/>
                <Footer/>
            </div>
        )
    }
}
export default  Main;