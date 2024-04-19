import Heading from "@/components/display/heading/default";
import ListView from "@/components/display/listView/default";
import Loader from "@/components/display/loader/default";
import Notification from "@/components/display/notification/default";
import Summary from "@/components/display/summary/default";
import Breaker from "@/components//display/textBreaker/textBreaker";
import VerticalIMEI from "@/components/display/IMEI/verticalIMEI";
import HorizontalIMEI from "@/components/display/IMEI/horizontalIMEI";
import IMEItext from "@/components/display/IMEI/IMEItext";
import Encrypt from "@/components/display/encrypt/encrypt";
import MediumIcon from "@/components/display/location/mediumIcon";
import MapI from "@/components/utils/google_maps/map";
import CentreBreaker from "@/components/display/textBreaker/centreTB";
import Warning from "@/components/display/warning/warning";
import LastRepair from "@/components/display/last page/lastRepair"
// import LoaderEmail from "@/components/display/loader/email"

// export { checkBox, dateTime, InputFields, Radio, Range, TextArea, }

import React from "react";

function Index({ element }) {
  // console.log("display: ", element);
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
    case "centreBreaker":
      return <CentreBreaker centreTB={element?.data?.centreTB} />;
      break;
    case "vIMEI":
      return <VerticalIMEI image={element?.data?.image} />;
      break;
    case "hIMEI":
      return <HorizontalIMEI box={element?.data?.box} />;
      break;
    case "IMEItext":
      return <IMEItext IMEItext={element?.data?.IMEI} />;
      break;
    case "encrypt":
      return <Encrypt Encrypt={element?.data?.Encrypt} />;
      break;
    case "location":
      return <MediumIcon MediumIcon={element?.data?.MediumIcon} />;
      break;
    case "map":
      return <MapI MapI={element?.data?.MapI} />;
      break;
    case "warning":
      return <Warning warning={element?.data?.warning} />;
      break;
      case "lastRepair":
      return <LastRepair />;
      break;
    // case "loader-email":
    //   return <LoaderEmail email={element?.data?.email} />;
    //   break;
    default:
      break;
  }
}

export default Index;
