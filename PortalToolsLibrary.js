(function(){
    // Define your namespace if it doesn't exist
    window.PortalToolsLibrary = window.PortalToolsLibrary || {};

    // Function to disable a specific lookup
    PortalToolsLibrary.disableLookup = function(id) {
        // Disable the element with the given ID
        $("#" + id).attr("disabled","disabled");

        // Disable the associated button
        $("#" + id).siblings("div.input-group-btn").find("button").prop("disabled", true);

        // Hide the associated button
        $("#" + id).siblings("div.input-group-btn").hide();
    };

    // Function to hide all elements with a specific class
    PortalToolsLibrary.hideElementsByClass = function(className) {
        // Hide all elements with the given class
        $("." + className).hide();
    };
})();
