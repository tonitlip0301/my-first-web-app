// ここからコードを書いてください
export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  lengthUnit.forEach((unit) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    converterFrom.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    converterTo.appendChild(optionTo);
  });

  converterFrom.selectedIndex = 0;
  converterTo.selectedIndex = 1;

  function converterUnit() {
    const inputValue = parseFloat(converterInput.value);
    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number.";
      return;
    }
    const fromValue = parseFloat(converterFrom.value);
    const toValue = parseFloat(converterTo.value);
    const convertedValue = ((inputValue * fromValue) / toValue).toFixed(3);

    converterResult.textContent = `${inputValue} ${converterFrom.options[converterFrom.selectedIndex].text} = ${convertedValue} ${converterTo.options[converterTo.selectedIndex].text}`;
  }
  converterForm.addEventListener("input", converterUnit);
  converterUnit();
}