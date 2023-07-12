// Function to disable a specific lookup
function disableLookup(id){
    // Disable the element with the given ID
    $("#" + id).attr("disabled","disabled");

    // Disable the associated button
    $("#" + id).siblings("div.input-group-btn").find("button").prop("disabled", true);

    // Hide the associated button
    $("#" + id).siblings("div.input-group-btn").hide();
}

// Function to hide all elements with a specific class
function hideElementsByClass(className){
    // Hide all elements with the given class
    $("." + className).hide();
}
