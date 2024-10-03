
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
  }
  else {
    // Otherwise place currently signed on user name into header. 
    var userSpan = getObj("userSpan");
    var user = pui["appJob"]["user"];
    if (user == null) user = "";
    userSpan.innerHTML = "Welcome&nbsp;" + user;
  }
  pui["loading animation"]["css"] = 'pui-gradient-animation';
  // Customize 132x27 mode
  if (pui.genie.displaySize==132 && !pui.genie.config.useAjax) {
    pui.genie.middleDiv.style.height = "640px";
    getObj("5250").style.position = "absolute";
    var position = (screen.width - 1060) / 2;
    if (position < 0) position = 0;
    getObj("5250").style.left = position + "px";
  }
  else {
    if (pui.genie.middleDiv != null) {
      pui.genie.middleDiv.style.height = "";
      getObj("5250").style.position = "relative";
      getObj("5250").style.left = "";
    }
  }

}
