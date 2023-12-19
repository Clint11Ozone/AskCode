import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from "react";

const Map = ({ imei = 0 }) => {

    function sumDig(n) {
        let a = 0;
        while (n > 0) {
            a = a + n % 10;
            n = parseInt(n / 10, 10);
        }
        return a;
    }

    function isValidIMEI(imei) {

        // Converting the number into
        // String for finding length
        let s = imei.toString();
        let len = s.length;

        if (len != 15)
            return false;

        let sum = 0;
        for (let i = len; i >= 1; i--) {
            let d = (n % 10);

            // Doubling every alternate digit
            if (i % 2 == 0)
                d = 2 * d;

            // Finding sum of the digits
            sum += sumDig(d);
            n = parseInt(n / 10, 10);
        }

        return (sum % 10 == 0);
    }

    return isValidIMEI(imei);
}


