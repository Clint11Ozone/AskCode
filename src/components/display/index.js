import Heading from "@/components/display/heading/default";
import ListView from "@/components/display/listView/default";
import Loader from "@/components/display/loader/default";
import Notification from "@/components/display/notification/default";
import Summary from "@/components/display/summary/default";
import Breaker from "@/components//display/textBreaker/textBreaker";
import VerticalIMEI from "@/components/display/IMEI/verticalIMEI";
import HorizontalIMEI from "@/components/display/IMEI/horizontalIMEI";
import IMEItext from "@/components/display/IMEI/IMEItext"
// export { checkBox, dateTime, InputFields, Radio, Range, TextArea, }

import React from "react";

function Index({ element }) {
  console.log("display: ", element);
  var type;

  switch (element?.type) {
    case "heading":
      return <Heading heading={element?.data?.heading} />;
      break;
    case "listView":
      return <ListView listView={element?.data?.listView} />;
      break;
    case "loader":
      return <Loader loader={element?.data?.loader} />;
      break;
    case "notification":
      return <Notification notification={element?.data?.notification} />;
      break;
    case "summary":
      return <Summary summary={element?.data?.summary} />;
      break;
    case "Breaker":
      return <Breaker textBreaker={element?.data?.textBreaker} />;
      break;
      case "vIMEI":
      return <VerticalIMEI VerticalIMEI={element?.data?.VerticalIMEI} />;
      break;
      case "hIMEI":
      return <HorizontalIMEI HorizontalIMEI={element?.data?.HorizontalIMEI} />;
      break;
      case "IMEItext":
      return <IMEItext IMEItext={element?.data?.IMEI} />;
      break;
    default:
      break;
  }
}

export default Index;
