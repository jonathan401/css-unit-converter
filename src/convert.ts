const pattern = /\d/;

const convertUnit = (
  input: number,
  from: string,
  to: string,
  base: number = 16
) => {
  interface rateType {
    [key: string]: {
      unit: string;
      value: number;
    };
  }
  if (to === from) {
    return "conversion units can't be the same!";
  }

  const rate: rateType = {
    rem: {
      unit: "rem",
      value: input / base,
    },
    px: {
      unit: "px",
      value: input * base,
    },
  };

  let resultValue = rate[to as keyof rateType].value;
  let resultUnit = rate[to as keyof rateType].unit;
  return `${resultValue}${resultUnit}`;
};

const convertField = document.querySelector(
  "#convert-field"
) as HTMLInputElement;
const fromField = document.querySelector("#from") as HTMLSelectElement;
const toField = document.querySelector("#to") as HTMLSelectElement;
const rootSizeField = document.querySelector("#set-root") as HTMLInputElement;
const convertedValue = document.querySelector("#result") as HTMLInputElement;
const copyBtn = document.querySelector(".copy-btn") as HTMLButtonElement;

const evaluate = (e: any) => {
  let input = convertField.valueAsNumber;
  let baseFont = rootSizeField.valueAsNumber;
  let unitFrom = fromField.value;
  let unitTo = toField.value;
  let result = convertUnit(input, unitFrom, unitTo, baseFont);
  convertedValue.value = result;
};

// handle change of select options
const handleChange = (e: any) => {
  evaluate(e);
};

// handle input
const handleInput = (e: any) => {
  // check if the value fits it is a valid number
  if (!pattern.test(e.target.value)) {
    e.target.classList.add("invalid");
    convertedValue.value = "";
  } else {
    e.target.classList.remove("invalid");
    // extract the values from the various fields
    evaluate(e);
  }
};

// event listeners
convertField.addEventListener("input", handleInput);
rootSizeField.addEventListener("input", handleInput);
toField.addEventListener("input", handleChange);
fromField.addEventListener("input", handleChange);
copyBtn.addEventListener("click", () => {
  // copy the current value from the field to clipboard
  if (convertedValue.value) {
    console.log(convertedValue.value);
    navigator.clipboard.writeText(convertedValue.value);
    copyBtn.textContent = "copied!";
    setTimeout(() => {
      copyBtn.textContent = "copy";
    }, 1200);
  }
});
