import React from 'react';

function SubHeader({
  subtitle = "This is a demo question: what is your hobby? How are you?",
  subtitle2 = "why like so",
  textSize = '1rem',
  color = '#808080',
}) {
  return (
    <div className="w-[375px] pb-[5px] flex flex-col items-center">
      <div className="w-[350px] text-center">
        <p className="text-sm/[23px] font-light">{subtitle}</p>
        <p className="text-sm/[23px] font-light">{subtitle2}</p>
      </div>
    </div>
  );
}

export default SubHeader;