import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button';

export class ExplodingComponent extends PureComponent {
  render() {
        return (
            <Button id="legacyCrashingPluginButton">
              Harmless button  ...or is it?
            </Button>
        )
    }
}