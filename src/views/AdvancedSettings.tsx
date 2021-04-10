import { FC } from "react";
import Card from "components/Card";
import DropdownMenu from "components/Dropdown";

const AdvancedSettings: FC = () => {
  return (
    <DropdownMenu label="Advanced Settings">
      <Card>Test</Card>
      <Card>Test Two</Card>
    </DropdownMenu>
  );
};

export default AdvancedSettings;
