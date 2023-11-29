import checkBox from "@/components/input/check-box"
import dateTime from "@/components/input/date-time"
import InputFields from "@/components/input/input-fields"
import Radio from "@/components/input/radio"
import Range from "@/components/input/range"
import TextArea from "@/components/input/text-area"
import Form from "@/components/input/form"

// export { checkBox, dateTime, InputFields, Radio, Range, TextArea, }

import React from 'react'

function Index({ element }) {

    console.log("input", element);

    switch (element?.type) {
        case "form":
            return (<Form form={element?.data?.form} />);
            break;
        case "radio":
            return (<Radio radio={element?.data?.radio} />);
            break;
        default:
            break;
    }
}

export default Index;