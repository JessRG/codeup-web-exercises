(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // join planetsArray with break html tags as delimiter
    console.log(planetsArray.join("<br>"));

    // Declared an empty array to build new array of planetsArray with opening and closing list item tags
    let planetsArr = [];
    for(let i = 0; i < planetsArray.length; i++) {
        planetsArr.push("<li>" + planetsArray[i] + "</li>");
    }

    // Add opening and closing unordered list tags to the newly built planets array (planetsArr)
    planetsArr.unshift("<ul>");
    planetsArr.push("</ul>");

    // join planetsArr and store in strList variable
    const strList = planetsArr.join(" ");
    console.log(strList);
    document.getElementById("planetsUL").innerHTML = strList;
})();
