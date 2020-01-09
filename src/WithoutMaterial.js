import React, { PureComponent } from 'react'
import { findDOMNode } from "react-dom";

export class ExplodingComponent extends PureComponent {
    static propTypes = {}

    static defaultProps = {}

    componentDidMount() {
      console.log(findDOMNode(this))
    }

  render() {
        return (
            <div>
              wassup
            </div>
        )
    }
}