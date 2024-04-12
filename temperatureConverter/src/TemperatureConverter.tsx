import { ReactElement, createElement} from "react";

import { TemperatureConverterContainerProps } from "../typings/TemperatureConverterProps";

import "./ui/TemperatureConverter.css";

export function TemperatureConverter(props: TemperatureConverterContainerProps): ReactElement {
    const {
        // onClickAction,
    } = props;
    // const onClickHandler = useCallback(() => {
    //     if (onClickAction && onClickAction.canExecute) {
    //         onClickAction.execute();
    //     }
    // }, [onClickAction]);

    return (
        <div className="widget-temperature-converter">
            <p>Hii</p>
        </div>
    );
}
