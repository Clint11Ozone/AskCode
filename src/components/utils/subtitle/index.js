import React from 'react';

function SubHeader({
  subtitle = "",
  subtitle2 = "",
  textSize = '1rem',
  color = '#808080',
}) {
  return (
    <div className="w-[375px] mb-[20px] flex flex-col items-center">
      <div className="w-[340px] text-center">
        <p className="text-sm/[23px] font-light">{subtitle}</p>
        
      </div>
    </div>
  );
}

export default SubHeader;