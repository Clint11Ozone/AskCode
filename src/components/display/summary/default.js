import React from 'react'
import Image from 'next/image'
import Phone_details from './phone_details'
import User_details from './user_details'
import Problem_details from './problem_details'
import Problem_details2 from './problem_details2'
import Problem_details3 from './problem_details3'

function Index({ summary }) 
{
    console.log(summary);
    console.log("--------------------");




    if (summary?.subCatagory == "phone_details") {
        return (<Phone_details summary={summary} />);
    } else if (summary?.subCatagory == "user_details") {
        return (<User_details summary={summary} />);
    } else if(summary?.subCatagory == "problem_details"){
        return (<Problem_details content={summary} />);
    }else if(summary?.subCatagory == "problem_details2"){
        return (<Problem_details2 content={summary} />);
    }else if(summary?.subCatagory == "problem_details3"){
        return (<Problem_details3 content={summary} />);
    } else {
        return <p>undefined!</p>
    }

}

export default Index
