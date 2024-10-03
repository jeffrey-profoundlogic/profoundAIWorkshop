
function customize() {
  
  // Customize Sign-On Screen
  if (detectScreen('D_1_22','             Sign On', 
                   'D_2_47','System  . . . . . :',
                   'D_3_47','Subsystem . . . . :',
                   'D_4_47','Display . . . . . :')) {
    hideElements('D_1_22', 'D_2_47', 'D_3_47', 'D_4_47', 'D_2_69', 'D_3_69', 'D_4_69', 'I_11_52', 'I_12_52', 'D_11_16', 'D_12_16',
                 'D_8_16', 'D_9_16', 'D_10_16', 'I_8_52', 'I_9_52', 'I_10_52', 'D_24_39');
    changeElementValue('D_6_16', '&nbsp;&nbsp;&nbsp;&nbsp;User:');
    changeElementClass('D_6_16', 'BigText');
    changeElementValue('D_7_16', 'Password:');
    changeElementClass('D_7_16', 'BigText');
    setDOMAttribute("D_7_16", "transparent", true);   
    setDOMAttribute("D_6_16", "transparent", true);      
    moveElement('D_6_16', 9, 15);
    moveElement('D_7_16', 11, 15);
    moveElement('I_6_52', 8.9, 49);
    moveElement('I_7_52', 10.9, 49);
    if (getObj('I_6_52') != null) getObj('I_6_52').style.width = "90px";
    if (getObj('I_7_52') != null) getObj('I_7_52').style.width = "90px";
    var loginButton = newElement(12.7, 49, 'button', 'Login', 'login_button');
    loginButton.onclick = function() { pressKey('Enter') };
    moveElement('quit_button', 12.7, 57);
    changeElementValue('quit_button', 'Exit');
    var backdrop = newElement(5, 15, "img", "/profoundui/proddata/images/login.gif", "backdrop_image");
    backdrop.style.zIndex = 5;
    
    // Format signon differently when using 128 char passwords:
    if (getObj("I_7_52")!=null 
      && getObj("I_8_0")!=null 
      && getObj("I_9_0")!=null) {
       var pwlength = 0;
       pwlength  = getObj("I_7_52").fieldInfo.size;
       pwlength += getObj("I_8_0").fieldInfo.size;
       pwlength += getObj("I_9_0").fieldInfo.size;
       if (pwlength == 128) {
          moveElement("D_6_16", 6.9, 15);
          moveElement("D_7_16", 8.9, 15);
          moveElement('I_6_52', 6.9, 49);
          moveElement('I_7_52', 8.9, 49);
          moveElement('I_8_0', 10, 49);
          moveElement('I_9_0', 11.1, 49);
          getObj("I_7_52").style.width = "150px";
          getObj("I_8_0").style.width = "150px";
          getObj("I_9_0").style.width = "150px";
       }
    }
    
    var msg = get('D_24_0');
    if (msg!='' && pui.genie.alertMsg=='') {
      pui.genie.alertMsg = msg;
      if (pui.genie.alertMsg.substr(0,3) == 'CPF') pui.genie.alertMsg = pui.genie.alertMsg.substr(8);
      if (pui.genie.alertMsg.substr(0,1) == '-') pui.genie.alertMsg = pui.genie.alertMsg.substr(1);
    }
    hideElement('D_24_0');        
  }
  else {
    // Otherwise place currently signed on user name into header. 
    var userSpan = getObj("userSpan");
    var user = pui["appJob"]["user"];
    if (user == null) user = "";
    userSpan.innerHTML = "Welcome&nbsp;" + user;
  }
  
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
