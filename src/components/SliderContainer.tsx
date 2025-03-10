import {Flex, Slider, Text} from "@mantine/core";


type Props = {
  value: number;
  displayValue?: string,
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  label?: string;
}

const SliderContainer: React.FC<Props> = (
  {
    value,
    displayValue,
    onChange,
    min,
    max,
    step,
    label,
  }) => {
  return (
    <Flex justify="space-between" align="center" w="100%">
      <Text>{label}</Text>
      <Flex gap={16} align="center">
        <Text style={{ fontWeight: 600 }}>{displayValue || value}</Text>
        <Slider
          min={min} max={max} step={step}
          value={value}
          onChange={(value: number) => onChange(value)}
          w={{ base: 160, md: 200 }}
        />
      </Flex>
    </Flex>

  );
};

export default SliderContainer;