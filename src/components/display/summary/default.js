import React from 'react'
import Image from 'next/image'
import Phone_details from './phone_details'
import User_details from './user_details'

function Index({ summary }) 
{
    console.log(summary);
    console.log("--------------------");

    const containerStyle = {
        position: "absolute",
        top: "80px",
        padding: "0px 0px  0px 0px",
        width: "385px",
    };
    const boxContainerP = {
        width: "350px",
        height: "116px",
        padding: "20px",
    };
    const boxContainerD = {
        width: "350px",
        height: "140px",
        padding: "20px",
    };
    const boxContainerProblem = {
        width: "350px",
        height: "122px",
        padding: "20px",
    };
    const imgPhone = {
        width: "36px",
        height: "45px",
        margin: "20px",
        position: "absolute",
        // bottom: "34px",
        left: "18px",
        top: "94px",
    };
    const detailsicon = {
        width: "20px",
        height: "20px",
        margin: "20px",
        position: "absolute",
        // bottom: "87px",
        left: "18px",
        top: "223px",
    };
    const detailsEdit = {
        width: "18px",
        height: "18px",
    };
    const phoneEdit = {
        width: "18px",
        height: "18px",
    };
    const ProblemEdit = {
        width: "18px",
        height: "18px",
    }
    const AudioStyle = {
        width: "24px",
        height: "24px"
    }
    const editContainerDetails = {
        width: "38px",
        height: "38px",
        Radius: "52px",
        position: "absolute",
        right: "25px",
        top: "235px",
        backgroundColor: "#F6F6F6",
    };
    const editContainerPhone = {
        width: "38px",
        height: "38px",
        Radius: "52px",
        backgroundColor: "#F6F6F6",
        position: "absolute",
        right: "25px",
        top: "100px",
    };
    const editContainerProblem = {
        width: "38px",
        height: "38px",
        Radius: "52px",
        backgroundColor: "#F6F6F6",
        position: "absolute",
        right: "25px",
        bottom: "75px",
    };
    const h1Left = {
        marginLeft: "0px"
    }




    if (summary?.subCatagory == "phone_details") {
        return (<Phone_details summary={summary} />);
    } else if (summary?.subCatagory == "user_details") {
        return (<User_details summary={summary} />);
    } else {
        return <p>undefined!</p>
    }

}

export default Index
