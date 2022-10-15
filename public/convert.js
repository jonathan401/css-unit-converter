"use strict";
var pattern = /\d/;
var convertUnit = function (input, from, to, base) {
    if (base === void 0) { base = 16; }
    if (to === from) {
        return "conversion units can't be the same!";
    }
    var rate = {
        rem: {
            unit: "rem",
            value: input / base,
        },
        px: {
            unit: "px",
            value: input * base,
        },
    };
    var resultValue = rate[to].value;
    var resultUnit = rate[to].unit;
    return "".concat(resultValue).concat(resultUnit);
};
var convertField = document.querySelector("#convert-field");
var fromField = document.querySelector("#from");
var toField = document.querySelector("#to");
var rootSizeField = document.querySelector("#set-root");
var convertedValue = document.querySelector("#result");
var copyBtn = document.querySelector(".copy-btn");
var evaluate = function (e) {
    var input = convertField.valueAsNumber;
    var baseFont = rootSizeField.valueAsNumber;
    var unitFrom = fromField.value;
    var unitTo = toField.value;
    var result = convertUnit(input, unitFrom, unitTo, baseFont);
    convertedValue.value = result;
};
// handle change of select options
var handleChange = function (e) {
    evaluate(e);
};
// handle input
var handleInput = function (e) {
    // check if the value fits it is a valid number
    if (!pattern.test(e.target.value)) {
        e.target.classList.add("invalid");
        convertedValue.value = "";
    }
    else {
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
copyBtn.addEventListener("click", function () {
    // copy the current value from the field to clipboard
    if (convertedValue.value) {
        console.log(convertedValue.value);
        navigator.clipboard.writeText(convertedValue.value);
        copyBtn.textContent = "copied!";
        setTimeout(function () {
            copyBtn.textContent = "copy";
        }, 1200);
    }
});
