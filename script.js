const popup = document.getElementById("popup");
const okButton = document.getElementById("okButton");
const submitButton = document.getElementById('submitButton');
const recommendation = document.getElementById("new-recommendation");

okButton.addEventListener("click", hide_popup);
submitButton.addEventListener("click", addRecommendation);

function addRecommendation(){
    if (recommendation.value != null && recommendation.value.trim() != ""){
        var element = document.createElement("div");
        element.setAttribute("class","recommendation");
        element.innerHTML = "\<span\>&#8220;\</span\> " + recommendation.value + " \<span\>&#8221;\</span\>";
        document.getElementById("current-recommendations").appendChild(element); 
        show_popup();
    }
}
function show_popup(){popup.style.display = "block";}
function hide_popup(){popup.style.display = "none";}