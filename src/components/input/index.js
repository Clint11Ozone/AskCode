import checkBox from "@/components/input/check-box";
import dateTime from "@/components/input/date-time";
import InputFields from "@/components/input/input-fields";
import Radio from "@/components/input/radio";
import Range from "@/components/input/range";
import TextArea from "@/components/input/text-area";
import Form from "@/components/input/form";
import Email from "@/components/input/email";
import Phone from "@/components/input/NameSurname";
import Select from "@/components/input/choice";
import LargeText from "./largeInput/Index";

// export { checkBox, dateTime, InputFields, Radio, Range, TextArea, }

import React from "react";

function Index({ element }) {
  console.log("input", element);

  switch (element?.type) {
    case "form":
      return <Form form={element?.data?.form} />;
      break;
    case "radio":
      return <Radio radio={element?.data} />;
      break;
    case "email":
      return <Email email={element?.data} />;
      break;
    case "name":
      return <Phone phone={element?.data} />;
      break;
    case "select":
      return <Select select={element?.data} />;
      break;
      case "largeText":
        return <LargeText LargeText={element?.data} />;
        break;
    default:
  }
}

export default Index;
