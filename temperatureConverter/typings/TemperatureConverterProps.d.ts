/**
 * This file was generated from TemperatureConverter.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type InputConversionRateEnum = "C" | "F" | "K";

export interface TemperatureConverterContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    advanced: boolean;
    inputValue: EditableValue<Big>;
    decimalPrecision: EditableValue<Big>;
    inputConversionRate: InputConversionRateEnum;
    placeholder: string;
    onClickAction?: ActionValue;
}

export interface TemperatureConverterPreviewProps {
    readOnly: boolean;
    advanced: boolean;
    inputValue: string;
    decimalPrecision: string;
    inputConversionRate: InputConversionRateEnum;
    placeholder: string;
    onClickAction: {} | null;
}
