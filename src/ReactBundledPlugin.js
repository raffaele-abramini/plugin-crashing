import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import {ExplodingComponent} from "./ExplodingComponent";

export default class DemoPlugin extends FlexPlugin {
  name = 'Crashing';

  init(flex, manager) {
    flex.CRMContainer.Content.add(<ExplodingComponent key="yeah" />);
  }
}
