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
    <Flex justify="space-between" align="center" w="100%" style={{ zIndex: -10 }}>
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

const styles = {
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  columnContainer: {
    alignItems: "center",
    gap: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  column: {
    alignItems: "center",
    gap: 2,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: "700"
  },
  slider: {
    width: 240,
  }
}
export default SliderContainer;