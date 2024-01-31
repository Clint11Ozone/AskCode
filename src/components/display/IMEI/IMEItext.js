import React, { useState } from "react";

const IconTextField = ({ IMEItext }) => {
    const [imei, setImei] = useState("");
    const [imeiCheck, setImeiCheck] = useState(false);

    const handleImeiChange = (e) => setImei(e.target.value);

    function sumDig(n) {
        let a = 0;
        while (n > 0) {
            a += n % 10;
            n = parseInt(n / 10, 10);
        }
        return a;
    }

    function isValidIMEI(n) {
        let s = n.toString();
        let len = s.length;

        if (len !== 15)
            return false;

        let sum = 0;
        for (let i = len; i >= 1; i--) {
            let d = (n % 10);
            if (i % 2 === 0) d *= 2;
            sum += sumDig(d);
            n = parseInt(n / 10, 10);
        }

        return (sum % 10 === 0);
    }

    function approveIMEI() {
        if (isValidIMEI(imei)) {
            setImeiCheck(true);
            alert("IMEI is valid!");  // Replace with a more suitable notification
        } else {
            setImeiCheck(false);
            alert("Please provide a valid IMEI number");  // Replace with a more suitable notification
        }
    }

    return (
        <div className="w-[375px] font-silkscreen pt-5 pb-2.5 flex flex-col text-center items-center">
            <form className="flex flex-row gap-[10px] w-[340px] border p-[20px] w-[340px] rounded-lg">
                <img src={IMEItext?.IOS} alt="" />
                <input
                    type="text"
                    placeholder={IMEItext?.PH}
                    value={imei}
                    onChange={handleImeiChange}
                />
                <button type="button" onClick={approveIMEI}>
                    {imeiCheck ? "Checked!" : "Check"}
                </button>
            </form>
        </div>
    );
};

export default IconTextField;
