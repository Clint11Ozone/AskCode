import Image from "next/image";
import Checkbox from "/public/assets/icons/drm2-checkbox.svg";
import Link from "next/link";
import { useRadioStore } from "@/components/utils/store/Store";

const RadioCardLarge = ({
  icon,
  text,
  selected,
  desc,
  id,
  value,
  onSelect,
}) => {
  const selectedClass = selected
    ? "border-[#5253f1] border-[1px]"
    : "border-[#b8b8b8] border-[1px]";
  const { selectedOption, setSelectedOption } = useRadioStore();

  const handleClick = (event) => {
    if (!selected) {
      onSelect(id);
    }
    console.log("Selected Radio Button Text:", text);
    localStorage.setItem(value, JSON.stringify(id));
    // const { id, value } = event.target;
    setSelectedOption(value, id);
    console.log(selectedOption);
  };
  /*tabnine Can you explain the logic behind this code block? */
  return (
    <div className="items-center pb-[15px] flex flex-col">
      <div className="w-[340px] h-[70px] relative">
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
          htmlFor={id}
          className={`option-card flex flex-row gap-6 items-center ${selectedClass} flex-grow rounded-[10px] py-4 pl-4 relative hover:border-[#5253f1] hover:border-[1px] transition-all duration-150 bg-white`}
        >
          <div className="w-5 h-5 border-[1px] rounded-full absolute top-2 right-2 hover:border-[#5253f1] hover:border-[1px]">
            {selected && <Image src={Checkbox} alt="ico" />}
          </div>
          <div className="relative h-[2rem] w-[2rem] my-2 ">
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
        </label>
      </div>
    </div>
  );
};

export default RadioCardLarge;
