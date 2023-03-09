function calculate(valueField1, valueField2, action, name) {
    console.log(valueField1);
    const valueString1 = valueField1.value;
    const value1 = parseFloat(valueString1);


    const valueString2 = valueField2.value;
    const value2 = parseFloat(valueString2);
    let result;
    if (action === "firstCalculation") {
        result = 0.5 * value1 * value2;

    }
    else if (action === "secondCalculation") {

        result = value1 * value2;

    }
    else if (action === "thirdCalculation") {
        const initianResult = 3.1415 * value1 * value2;

        result = initianResult.toFixed(2);
    }

    if (isNaN(result)) {
        alert("Please enter a valid number");
        return;
    }



    const resultContainer = document.getElementById("result-container")
    resultContainer.innerHTML += `<li class="w-full mb-2"><div class="flex"><p>${name} : ${result} cm<sup>2</sub></p> <button class="bg-sky-600 rounded-xl text-xs px-3 py-2 text-white hover:bg-violet-600">Convert to m<sup>2</sup></button></div></li>`



    valueField1.value = "";
    valueField2.value = "";

}



//triangle//

document.getElementById("calculation-btn-1").addEventListener("click", function () {



    const valueField1 = document.getElementById("value-field-1");


    const valueField2 = document.getElementById("value-field-2");

    calculate(valueField1, valueField2, "firstCalculation", "Triangle");

})

// rectangle//

document.getElementById("calculation-btn-2").addEventListener("click", function () {
    const valueField3 = document.getElementById("value-field-3");


    const valueField4 = document.getElementById("value-field-4");



    calculate(valueField3, valueField4, "secondCalculation", "Rectangle");
})

//paralellogram


document.getElementById("calculation-btn-3").addEventListener("click", function () {
    const valueField5 = document.getElementById("value-field-5");




    const valueField6 = document.getElementById("value-field-6");


    calculate(valueField5, valueField6, "secondCalculation", "Parallelogram");
})


//rhombos

document.getElementById("calculation-btn-4").addEventListener("click", function () {
    const valueField7 = document.getElementById("value-field-7");


    const valueField8 = document.getElementById("value-field-8");




    calculate(valueField7, valueField8, "firstCalculation", "Rhombos");
})




//  pentagon//

document.getElementById("calculation-btn-5").addEventListener("click", function () {
    const valueField9 = document.getElementById("value-field-9");


    const valueField10 = document.getElementById("value-field-10");


    calculate(valueField9, valueField10, "firstCalculation", "Pentagon");


})

//ellipse

document.getElementById("calculation-btn-6").addEventListener("click", function () {
    const valueField11 = document.getElementById("value-field-11");


    const valueField12 = document.getElementById("value-field-12");





    calculate(valueField11, valueField12, "thirdCalculation", "Ellipse");

})