import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrice from "./tabs_nav/TabPrice";
import TabContentDoor from './TabContentDoor';
import TabContentDevices from './TabContentDevices';
import TabContentPrice from './TabContentPrice';
import '../css/TabsNav.css';


class TabsComponent extends Component {

    state = {
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tab-nav-container" >
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null} `}>
                            <TabDoor />
                            <p className="lgScreen"> <strong>No commitments <br/> Cancel online at anytime </strong></p>
                            <br/>
                            <span className="mdScreen">Cancel</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null} `}>
                            <TabDevices/>
                            <p className="lgScreen" style={{marginTop: '-5rem'}}> <strong>Watch anywhere </strong></p>
                            <br/>
                            <span className="mdScreen">Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null} `}>
                            <TabPrice/>
                            <p className="lgScreen"> <strong>Pick up your price </strong></p>
                            <br/>   
                            <span className="mdScreen">Price</span>
                        </Tab>
                    </TabList> 
                    {/* Tabs Content */}
                    <TabPanel>
                        <TabContentDoor/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentDevices/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentPrice/>
                    </TabPanel>
                </Tabs>
                </div>
        )
    }
}
export default TabsComponent;

