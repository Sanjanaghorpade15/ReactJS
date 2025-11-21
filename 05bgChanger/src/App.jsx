import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "./useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const convert = () => {
        if (!currencyInfo[to]) return;
        setConvertedAmount(amount * currencyInfo[to]);
    };

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-300">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">

                <InputBox
                    label="From"
                    amount={amount}
                    onAmountChange={setAmount}
                    onCurrencyChange={setFrom}
                    currencyOptions={options}
                    selectCurrency={from}
                />

                <div className="flex justify-center my-4">
                    <button
                        onClick={swap}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
                    >
                        Swap
                    </button>
                </div>

                <InputBox
                    label="To"
                    amount={convertedAmount}
                    amountDisable={true}
                    onCurrencyChange={setTo}
                    currencyOptions={options}
                    selectCurrency={to}
                />

                <button
                    onClick={convert}
                    className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg"
                >
                    Convert
                </button>

            </div>
        </div>
    );
}

export default App;
