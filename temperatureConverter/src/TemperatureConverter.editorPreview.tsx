import { ReactElement, createElement } from "react";


import { BadgeSample, BadgeSampleProps } from "./components/BadgeSample";
import { TemperatureConverterPreviewProps } from "../typings/TemperatureConverterProps";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props: TemperatureConverterPreviewProps): BadgeSampleProps {
    const {} = props;
    return {
        clickable: false,
    };
}

export function preview(props: TemperatureConverterPreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <BadgeSample {...transformProps(props)}></BadgeSample>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/TemperatureConverter.css");
}
