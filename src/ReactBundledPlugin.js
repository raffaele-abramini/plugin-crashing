import { FlexPlugin } from 'flex-plugin';
import React from 'react';
// import { Dialer, DialerButton, MyCustomSidebarPage, MySidebarDashboardButton  } from "./MyCustomSidebarComponents";
import {ExplodingComponent} from "./WithoutMaterial";

export default class DemoPlugin extends FlexPlugin {
  name = 'DemoPlugin';

  init(flex, manager) {

    window.onerror = function(message, source, lineno, colno, error) {
      console.log("hey")
    };
    

    // place your logo here
    // flex.MainHeader.defaultProps.logoUrl = "https://i.pinimg.com/originals/6d/77/f4/6d77f4f6da25fa1661e85736a7f0d96d.jpg";
    // flex.TaskInfoPanel.Content.add(<MyCustomTaskInfoPanelItem key="send-QR-code-coupon"/>)
    flex.CRMContainer.Content.add(<ExplodingComponent key="yeah" />);

    // flex.SideNav.Content.add(<MySidebarDashboardButton key="dashboard1" />);
    // flex.SideNav.Content.add(<DialerButton key="dashboard2" />);
    // flex.CallCanvas.Content.add(<DialPad key="dialpad3"/>);
    // flex.ViewCollection.Content.add(<flex.View key="dashboard3" name="my-custom-page"><MyCustomSidebarPage /></flex.View>);
    // flex.ViewCollection.Content.add(<flex.View key="dashboard4" name="dialer-page"><Dialer /></flex.View>);
    /*    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskListComponent key="demo-component" />, {
          sortOrder: -1,
        });*/
  }

}
