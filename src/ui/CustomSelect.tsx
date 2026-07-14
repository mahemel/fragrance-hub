import { Label, ListBox, Select } from "@heroui/react";

interface CustomSelectProps {
    name: string;
    label: string;
    items: string[];
    placeholder?: string;
    defaultValue?: string;
    isRequired?: boolean;
    className?: string;
    selectionMode?: "single" | "multiple";
}

const CustomSelect = ({
    name,
    label,
    items,
    placeholder = "Select an option",
    defaultValue,
    isRequired = false,
    className = "w-full",
    selectionMode = "single",
}: CustomSelectProps) => {
    return (
        <Select
            className={className}
            defaultValue={defaultValue}
            isRequired={isRequired}
            name={name}
            placeholder={placeholder}
            selectionMode={selectionMode}
        >
            <Label className="label">{label}</Label>

            <Select.Trigger className="text-field">
                <Select.Value className="text-base leading-10 text-foreground overflow-hidden block whitespace-nowrap text-ellipsis pr-2.5" />
                <Select.Indicator className="text-muted-foreground" />
            </Select.Trigger>

            <Select.Popover>
                <ListBox>
                    {items.map((item) => (
                        <ListBox.Item key={item} id={item} textValue={item}>
                            {item}
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    ))}
                </ListBox>
            </Select.Popover>
        </Select>
    );
};

export default CustomSelect;
