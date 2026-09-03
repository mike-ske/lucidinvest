"use client";
import CustomSelect from "@/components/elements/CustomSelect";
export default function Language(){

    const options = [
        { value: "0", label: "En" },
        { value: "1", label: "Fra" },
        { value: "2", label: "Ger" },
        { value: "3", label: "Ita" },
    ];

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

    return(
        <>
        <div className="select-box clearfix">
            <CustomSelect
                options={options}
                placeholder="En"
                onChange={handleSelectChange}
            />
        </div>
        </>
    )
}