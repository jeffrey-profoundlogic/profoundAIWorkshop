
pui["close browser text"] = "To complete the log off process, please close your browser.";

var Tab = {};
Tab.autoHideKeypad = true; // Set this to close the keypad (or not) after pressing a key.

Tab.rendered = false;
Tab.container;
Tab.multX;
Tab.multY;
Tab.multXWide = 7.5;
Tab.multYWide = 20;

Tab.sizeDisplay = function() {

  if (!Tab.rendered) {
  
    Tab.container = document.getElementById("main");
    Tab.multX = pui.multX;
    Tab.multY = pui.multY;
    Tab.rendered = true;
  
  }

  // Assign classes and adjust multipliers for screen size and display mode.
  var cls;
  if (screen.width <= 768) {
  
    cls = "lowres-";
  
  }
  else {
  
    cls = "highres-";
  
  }
  
  if (pui.genie.displaySize == 132) {
  
    pui.multX = Tab.multXWide;
    pui.multY = Tab.multYWide;
    document.body.className = cls + "wide";
  
  }
  else {

    pui.multX = Tab.multX;
    pui.multY = Tab.multY;
    document.body.className = cls + "normal";      
  
  }

}

Tab.showKeypad = function(e) {

  e = e || window.event;
  
  document.getElementById("keypad").style.display = "block";
  
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;

}

Tab.hideKeypad = function(e) {

  e = e || window.event;

  document.getElementById("keypad").style.display = "none";
  
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;

}

Tab.pressKey = function(key, e) {

  e = e || window.event;

  if (key == "Help" && pui["5250"]["state"] == "P") {
  
    key = "ErrorHelp";
  
  }

  pressKey(key);
  
  if (Tab.autoHideKeypad == true) {
  
    Tab.hideKeypad(e);
  
  }
  else {

    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  
  }
  
}

function beforeLoad() {

  // Hide content area until screen has rendered.
  document.getElementById("5250").style.visibility = "hidden";

  // Show main content area on first display.
  document.getElementById("main").style.display = "block";

  Tab.sizeDisplay();

}

function customize() {
  pui["loading animation"]["css"] = 'pui-tablet-animation';
  var userDiv = document.getElementById("user");
  if (userDiv) {
  
    if (pui.appJob.user != "") {
    
      userDiv.innerHTML = "User: " + pui.appJob.user; 
    
    }
    else {
    
      userDiv.innerHTML = "";
    
    }
    
  }
  
  var quitButton = document.getElementById("quit_button");
  if (quitButton) {
  
    quitButton.style.width = "75px";
  
  }
  
}

function afterLoad() {

}
