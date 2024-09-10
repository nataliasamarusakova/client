import React from 'react';

interface ISpinNumberEdit {
    value: number
    minValue: number;
    maxValue?: number;
    maxLength?: number;
    width?: number;
    setValueInput: React.Dispatch<React.SetStateAction<number>>
}

const SpinNumberEdit: React.FC<ISpinNumberEdit> = ({ width, minValue, maxValue, value, maxLength, setValueInput }) => {

    width = width || 65
    minValue = minValue || 1;
    maxValue = maxValue || 99999;
    maxLength = maxLength || 5;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        value && setValueInput(value)
    }

    return <div className="d-flex align-items-center">
        <i className="btn btn-primary " onClick={() => value > minValue && setValueInput(value - 1)}>-</i>
        <input
            type="text"
            className="form-control mx-2"
            value={value}
            maxLength={maxLength}
            onChange={onChange}
            pattern="[0-9]*"
            inputMode="numeric"
            style={{ width: `${width}px`, textAlign: 'center', }}
        />
        <i className="btn btn-primary " onClick={() => value < maxValue && setValueInput(value + 1)}>+</i>
    </div>
};

export default SpinNumberEdit;
