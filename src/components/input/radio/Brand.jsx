import Image from "next/image";
import { useRadioStore } from "@/components/utils/store/Store";


const RadioCardLarge = ({
  icon,
  text,
  value,
  selected,
  desc,
  id,
  onSelect,
}) => {
  const selectedClass = selected
    ? "border-[#5253f1] border-[1px]"
    : "border-[#b8b8b8] border-[1px]";

  const { selectedOption, setSelectedOption } = useRadioStore();

  
  const handleClick = () => {
    if (!selected) {
      onSelect(id);
    }
    console.log("Selected brand Button Text:", text);
    localStorage.setItem(value, id);
    setSelectedOption(value, id);
    console.log(selectedOption);
  };

  return (
    <div className=" items-center flex  flex-col ">
      <div className=" w-[165px]  h-[111px] mx-[3px]  relative ">
        <input
          type="radio"
          id={id}
          value={value}
          name="radio-group"
          className="sr-only" // Hide the input visually but keep it accessible
          checked={selected}
          onChange={handleClick}
        />
        <label
          onClick={handleClick}
          className={`option-card flex flex-col items-center ${selectedClass} flex-grow rounded-[10px] py-4 relative hover:border-[#5253f1] hover:border-[1px] transition-all duration-150 bg-white`}
        >
          <div className="w-5 h-5 border-[1px] rounded-full absolute top-2 right-2 hover:border-[#5253f1] hover:border-[1px]">
            {selected && (
              <Image
                src="assets/icons/drm2-checkbox.svg"
                width={30}
                height={30}
                alt="ico"
              />
            )}
          </div>
          <div className="relative h-[38px] w-[100px] my-2 ">
            {icon && (
              <Image
                src={icon}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            )}
          </div>
          <div className="text-[1rem] font-bold">{text}</div>
          {/* <div className="text-center text-[#9a9a9a] font-medium pt-[0.75rem] 2xl:pt-[1rem] text-[0.75rem] md:text-[0.9rem]">{desc}</div> */}
        </label>
      </div>
    </div>
  );
};

export default RadioCardLarge;
