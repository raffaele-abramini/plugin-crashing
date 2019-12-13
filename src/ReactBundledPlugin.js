import { FlexPlugin } from 'flex-plugin';
import React from 'react';
// import CustomTaskListComponent from './CustomTaskListComponent';
import { Dialer, DialerButton, MyCustomSidebarPage, MySidebarDashboardButton  } from "./MyCustomSidebarComponents";
// import { MyCustomTaskInfoPanelItem } from "./MyCustomTaskInfoPanelItem";

export default class DemoPlugin extends FlexPlugin {
  name = 'DemoPlugin';

  init(flex, manager) {

    flex.CRMContainer.defaultProps.uriCallback = (task) => {

      return task ? "http://google.com/?search="+ task.attributes.name : "opla"
    };

    // place your logo here
    // flex.MainHeader.defaultProps.logoUrl = "https://i.pinimg.com/originals/6d/77/f4/6d77f4f6da25fa1661e85736a7f0d96d.jpg";
    // flex.TaskInfoPanel.Content.add(<MyCustomTaskInfoPanelItem key="send-QR-code-coupon"/>)

    flex.SideNav.Content.add(<MySidebarDashboardButton key="dashboard1" />);
    flex.SideNav.Content.add(<DialerButton key="dashboard2" />);
    // flex.CallCanvas.Content.add(<DialPad key="dialpad3"/>);
    flex.ViewCollection.Content.add(<flex.View key="dashboard3" name="my-custom-page"><MyCustomSidebarPage /></flex.View>);
    // flex.ViewCollection.Content.add(<flex.View key="dashboard4" name="dialer-page"><Dialer /></flex.View>);
    /*    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskListComponent key="demo-component" />, {
          sortOrder: -1,
        });*/
  }

}
