import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex flex-col gap-2 ${className}`}>

            {/* LABELS */}
            <div className="flex justify-between">
                <label htmlFor={amountInputId} className="text-black/40">
                    {label}
                </label>
                <label className="text-black/40">Currency Type</label>
            </div>

            {/* INPUT + SELECT */}
            <div className="flex justify-between gap-3">

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />

                <select
                    className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none min-w-[80px]"
                    value={currencyOptions.includes(selectCurrency) ? selectCurrency : ""}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    );
}

export default InputBox;
