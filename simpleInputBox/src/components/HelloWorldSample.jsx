import { Component, createElement } from "react";

export class HelloWorldSample extends Component {
    render() {
        return <div className="widget-hello-world">{this.props.sampleText}</div>;
    }
}
