import React, { Component } from 'react';
import TabsComponent from '../components/TabsComponent';
import Header from './../components/Header';
import Footer from './../components/Footer';

class Main extends Component {
    render() {
        return (
            <div>
               <Header/>
               <TabsComponent/>
               <Footer/>
            </div>
        )
    }
}
export default  Main;