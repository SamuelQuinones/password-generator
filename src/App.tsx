import React, { useState } from "react";
import "./styles/App.css";
import Footer from "components/Footer";
import Card from "components/Card";
import Togglebutton from "components/ToggleButton";
import Button from "components/Button";
import Slider from "components/Slider";
import DropdownMenu from "components/Dropdown";

function App() {
  const [passwordLength, setPasswordLength] = useState(6);

  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className="App container mx-auto">
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 md:col-span-1">
          {/* Length */}
          <label className="block" htmlFor="characterNum">
            Length: {passwordLength}
          </label>
          <Card>
            <Slider
              value={passwordLength}
              onChange={(e) =>
                setPasswordLength(parseInt(e.currentTarget.value))
              }
              htmlID="characterNum"
              min={6}
              max={24}
              step={1}
            />
          </Card>
          {/* Additional Settings */}
          <div>Settings</div>
          <Card>
            <Togglebutton
              htmlId="uppercase"
              label="Include Uppercase"
              checked={includeUppercase}
              onChange={() =>
                setIncludeUppercase((prev) => {
                  prev === true &&
                    includeLowercase === false &&
                    setIncludeLowercase(true);
                  return !prev;
                })
              }
            />
          </Card>
          <Card>
            <Togglebutton
              htmlId="lowercase"
              label="Include Lowercase"
              checked={includeLowercase}
              onChange={() =>
                setIncludeLowercase((prev) => {
                  prev === true &&
                    includeUppercase === false &&
                    setIncludeUppercase(true);
                  return !prev;
                })
              }
            />
          </Card>
          <Card>
            <Togglebutton
              htmlId="numbers"
              label="Include Numbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
          </Card>
          <Card>
            <Togglebutton
              htmlId="symbols"
              label="Include Symbols"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
          </Card>
          {/* Advanced Settings */}
          <DropdownMenu label="Advanced Settings">
            <Card>Test</Card>
            <Card>Test Two</Card>
          </DropdownMenu>
        </div>

        <div className="col-span-2 md:col-span-1">d</div>
      </div>
      <Button className="mt-5">Generate Password</Button>
      <Footer />
    </div>
  );
}

export default App;
