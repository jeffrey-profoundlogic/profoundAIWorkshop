var hybridSkin = {};

function customize() {

  // Customize Sign-On Screen
  if (detectScreen('D_1_23','             Sign On', 
                   'D_2_48','System  . . . . . :',
                   'D_3_48','Subsystem . . . . :',
                   'D_4_48','Display . . . . . :')) {
    hideElements('D_1_23', 'D_2_48', 'D_3_48', 'D_4_48', 'D_2_70', 'D_3_70', 'D_4_70', 'I_11_53', 'I_12_53', 'D_11_17', 'D_12_17',
                 'D_8_17', 'D_9_17', 'D_10_17', 'I_8_53', 'I_9_53', 'I_10_53', 'D_24_40');
    changeElementValue('D_6_17', '&nbsp;&nbsp;&nbsp;&nbsp;User:');
    changeElementClass('D_6_17', 'BigText');
    changeElementValue('D_7_17', 'Password:');
    changeElementClass('D_7_17', 'BigText');
    setDOMAttribute("D_7_17", "transparent", true);   
    setDOMAttribute("D_6_17", "transparent", true);      
    moveElement('D_6_17', 8.9, 15);
    moveElement('D_7_17', 10.9, 15);
    moveElement('I_6_53', 8.9, 49);
    moveElement('I_7_53', 10.9, 49);
    if (getObj('I_6_53') != null) getObj('I_6_53').style.width = "90px";
    if (getObj('I_7_53') != null) getObj('I_7_53').style.width = "90px";
    var loginButton = newElement(12.7, 49, 'button', 'Login', 'login_button');
    loginButton.onclick = function() { pressKey('Enter') };
    moveElement('quit_button', 12.7, 57);
    changeElementValue('quit_button', 'Exit');
    var backdrop = newElement(5, 15, "img", "/profoundui/proddata/images/login.gif", "backdrop_image");
    backdrop.style.zIndex = 5;
    
    // Format signon differently when using 128 char passwords:
    if (getObj("I_7_53")!=null 
      && getObj("I_8_1")!=null 
      && getObj("I_9_1")!=null) {
       var pwlength = 0;
       pwlength  = getObj("I_7_53").fieldInfo.size;
       pwlength += getObj("I_8_1").fieldInfo.size;
       pwlength += getObj("I_9_1").fieldInfo.size;
       if (pwlength == 128) {
          moveElement("D_6_17", 6.9, 15);
          moveElement("D_7_17", 8.9, 15);
          moveElement('I_6_53', 6.9, 49);
          moveElement('I_7_53', 8.9, 49);
          moveElement('I_8_1', 10, 49);
          moveElement('I_9_1', 11.1, 49);
          getObj("I_7_53").style.width = "150px";
          getObj("I_8_1").style.width = "150px";
          getObj("I_9_1").style.width = "150px";
       }
    }
    
    var msg = get('D_24_1');
    if (msg!='' && pui.genie.alertMsg=='') {
      pui.genie.alertMsg = msg;
      if (pui.genie.alertMsg.substr(0,3) == 'CPF') pui.genie.alertMsg = pui.genie.alertMsg.substr(8);
      if (pui.genie.alertMsg.substr(0,1) == '-') pui.genie.alertMsg = pui.genie.alertMsg.substr(1);
    }
    hideElement('D_24_1');
    hybridSkin.signon = true;
  }
  else {
    hybridSkin.signon = false;
  }
  pui["loading animation"]["css"] = 'pui-hybrid-animation';
  if (pui.genie.afterInit == null) {
    pui.genie.afterInit = function() {
    
      if (pui.genie.displaySize == 132) hybridSkin.screenWidth = 1100;
      else hybridSkin.screenWidth = 775;    
    
      hybridSkin.displayLogo();
      hybridSkin.displayUser();
      hybridSkin.removeHeader();
      hybridSkin.createHeader();
      hybridSkin.createSideMenu();
    }
  }
}


function afterLoad() {
  if (hybridSkin.signon) document.body.className = "hybrid-signon";
  else document.body.className = "hybrid";

  pui["vertical button spacing"] = 24;
  
  hybridSkin.resizeArea();
  window.onresize = function() {
    hybridSkin.resizeArea();
  }


}


hybridSkin.removeHeader = function() {
  if (hybridSkin.heading1 != null && hybridSkin.heading1.parentNode != null) {
    hybridSkin.heading1.parentNode.removeChild(hybridSkin.heading1);
  }
  if (hybridSkin.heading2 != null && hybridSkin.heading2.parentNode != null) {
    hybridSkin.heading2.parentNode.removeChild(hybridSkin.heading2);
  }
}


hybridSkin.fixLinks = function() { 

  if (pui.genie.middleDiv != null) {
    links = pui.genie.middleDiv.getElementsByTagName("A");
    var count = 0;
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var div = link.parentNode;
      if (div.className == "hybrid-link" && div.style.visibility != "hidden" && div.style.display != "none") {
        count++;
        var arrow = newElement("div", "", "arrow" + i + "_" + div.id);
        arrow.className = "fkey-arrow";
        arrow.innerHTML = "&gt;";
        arrow.style.left = (parseInt(div.style.left) - 12) + "px";
        arrow.style.top = (parseInt(div.style.top) - 2) + "px";
      }
    }
  }
  
  var panel = getObj("ActionsPanel");
  if (panel != null) {
    var height = count * 30 + 100;
    if (height < 450) height = 450;
    panel.style.height = height + "px";
  }
}


hybridSkin.resizeArea = function() {
  if (pui.genie.middleDiv != null) {
    var div5250 = getObj("5250");
    if (div5250 != null && div5250.style.width != "100%") {
      var windowWidth =  pui.getWindowSize().width;
      if (pui.genie.displaySize == 132) {
        pui.genie.middleDiv.style.height = "640px";
        div5250.style.position = "absolute";
        var position = (windowWidth - 950) / 2;
        if (position < 180) position = 180;
        div5250.style.left = position + "px";
      }
      else {
        pui.genie.middleDiv.style.height = "560px";
        div5250.style.position = "absolute";
        var position = (windowWidth - 620) / 2;
        if (position < 180) position = 180;
        div5250.style.left = position + "px";
      }
    }
  }
}


hybridSkin.displayLogo = function(dspf) {
  var logo = "logo.png";
  var logoElement = newElement("img", "/profoundui/userdata/genie skins/Hybrid/" + logo);
  logoElement.style.top = "-72px";
  if (dspf) logoElement.style.left = "5px";
  else logoElement.style.left = "-170px";
}


hybridSkin.displayUser = function(dspf) {
  var user = pui["appJob"]["user"];
  if (user == null) user = "";
  if (user != "") user = "User:&nbsp;" + user;
  var userElement = newElement("div", user);
  userElement.style.top = "-62px";
  var left = hybridSkin.screenWidth;
  if (dspf) left = parseInt(pui.genie.middleDiv.style.width);
  left = left - 150;
  userElement.style.left = left + "px";
  userElement.style.fontWeight = "bold";
  userElement.style.fontFamily = "sans-serif";
  userElement.style.color = "#ffffff";
}


hybridSkin.createHeader = function() {
  
  hybridSkin.headingRows = 3;
  if (!hybridSkin.signon) {
    hybridSkin.heading1 = document.createElement("div");
    hybridSkin.heading1.id = "hybrid-heading1";
    hybridSkin.heading1.className = "hybrid-heading1";
    getObj("5250").parentNode.parentNode.appendChild(hybridSkin.heading1);
  }
  hybridSkin.heading2 = document.createElement("div");
  hybridSkin.heading2.id = "hybrid-heading2";
  getObj("5250").parentNode.parentNode.appendChild(hybridSkin.heading2);

  pui["loading animation"]["left"] = -165;
  
  var height = 67;
  // if (some condition should trigger 2 rows vs. 3)  {
    height = height - pui.multY;
    hybridSkin.headingRows -= 1;
  // }
  hybridSkin.heading2.style.height = height + "px";
  hybridSkin.heading2.className = "hybrid-heading2";
  
  var divs = document.getElementById("5250").getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {  
    var div = divs[i];
    var id = div.id;
    if (id.substr(0,4) == "D_1_" || id.substr(0,4) == "D_2_") {
      if (id.indexOf("_W") == -1) {
        div.style.color = "white";
        if (id.substr(0,4) == "D_1_") {
          div.style.fontFamily = "sans-serif";
          div.style.fontSize = "15px";
        }
      }    
    }    
  }
}


hybridSkin.createSideMenu = function() {
  var inputs = document.getElementById("5250").getElementsByTagName("input");
  var buttons = [];
  var dups = {};
  var gotEnter = false;
  for (var i = 0; i < inputs.length; i++) {  
    var input = inputs[i];
    if (input.type != "button" || input.fkey == null)  continue;
    // don't add a nondisplay button to the side menu
    if (input.className.indexOf("hide") >= 0)  continue; 
    // don't add buttons in window formats to side menu, but do
    //   do style them as 'hybrid-button'
    if (input.id.indexOf("W") != -1) {
      changeElementClass(input.id, "hybrid-button");
      continue;
    }
    // don't add buttons created for PSHBTNFLD/PSHBTNCHC keywords.
    if (input.id.indexOf("S_") === 0) {
      continue;
    }

    input.style.visibility = "hidden";
    if (dups[input.value] == true) continue;
    buttons.push({    
      fkey: input.fkey,
      text: input.value
    });
    dups[input.value] = true;
    if (input.fkey.toLowerCase() == "enter") gotEnter = true;    
  }
  
  if (buttons.length > 0) {
    // sort buttons
    buttons.sort(function(a, b) {
      if (a.fkey < b.fkey) return -1;    
      else if (a.fkey == b.fkey) return 0;    
      else return 1;    
    });
    if (!gotEnter) {
      buttons.splice(0, 0, {
        fkey: "Enter",
        text: "Continue"
      });
    }
    
    // create panel
    var panel = newElement("div", "", "side");
    var panelTop = 75;
    if (hybridSkin.headingRows == 2) panelTop -= pui.multY;
    panel.style.top = panelTop + "px";
    panel.style.left = "-175px";
    panel.style.width = "165px";
    var height = buttons.length * 30 + 100;
    if (height < 450) height = 450;
    panel.style.height = height + "px";
    
    panel.className = "hybrid-actions";
  
    var top = 90;
    if (hybridSkin.headingRows == 2) top -= pui.multY;
    for (var i = 0; i < buttons.length; i++) {  
      var arrow = newElement("div", "", "arrow" + i);
      arrow.className = "fkey-arrow";
      arrow.innerHTML = "&gt;";
      arrow.style.left = "-162px";

      var fkeyLink = newElement("div", "", "fkey" + i);
      fkeyLink.className = "fkey-link";
      fkeyLink.innerHTML = buttons[i].text;
      fkeyLink.style.left = "-150px";
      fkeyLink.style.width = "140px";
      fkeyLink.style.whiteSpace = "normal";
      fkeyLink.fkey = buttons[i].fkey;
      fkeyLink.onclick = function(e) {
        var target = getTarget(e);
        if (target.fkey == null) target = target.parentNode;
        var fkey = target.fkey;
        pressKey(fkey);
      }
      
      if (i > 0) {
        top = (prevLink.offsetTop + prevLink.offsetHeight + 7);
      }
      arrow.style.top = (top-2) + "px";
      fkeyLink.style.top = top + "px";
      
      var prevLink = fkeyLink;  
    }
  }

}

pui.onload = function() {
  pui["loading animation"]["left"] = 10;
  pui["loading animation"]["css"] = 'pui-animation';
  window.onresize = function() { };
  setTimeout(function() {
    var headingPanel = getObj("HeadingPanel");
    if (headingPanel != null) headingPanel.parentNode.removeChild(headingPanel);
    headingPanel = getObj("HeadingPanel");
    if (headingPanel != null) headingPanel.parentNode.removeChild(headingPanel);
    hybridSkin.fixLinks();
    hybridSkin.removeHeader();
    hybridSkin.createHeader();    
    hybridSkin.displayLogo(true);
    hybridSkin.displayUser(true);
  }, 0);
}
