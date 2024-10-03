
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

    var loginButton = newElement(11, 42, 'button', 'Login', 'login_button');
    loginButton.onclick = function() { pressKey('Enter') };
    moveElement('quit_button', 11, 50);
    changeElementValue('quit_button', 'Exit');
    
    getObj('D_6_17').style.top="157px"; // User Label
    getObj('D_6_17').style.left="63px"
    getObj('D_7_17').style.top="196px"; // Password Label
    getObj('D_7_17').style.left="63px"
    getObj('I_6_53').style.top="154px"; // User Textbox
    getObj('I_6_53').style.left="335px";
    getObj('I_7_53').style.top="193px"; // Password Textbox
    getObj('I_7_53').style.left="335px";
    getObj('I_6_53').style.width = "90px";
    getObj('I_7_53').style.width = "90px";

    // Format signon differently when using 128 char passwords:
    if (getObj("I_7_53")!=null 
      && getObj("I_8_1")!=null 
      && getObj("I_9_1")!=null) {
       var pwlength = 0;
       pwlength  = getObj("I_7_53").fieldInfo.size;
       pwlength += getObj("I_8_1").fieldInfo.size;
       pwlength += getObj("I_9_1").fieldInfo.size;
       if (pwlength == 128) {
          getObj('D_6_17').style.top="137px"; // User Label
          getObj('D_6_17').style.left="52px"
          getObj('D_7_17').style.top="183px"; // Password Label
          getObj('D_7_17').style.left="52px"
          getObj('I_6_53').style.top="137px"; // User Textbox
          getObj('I_6_53').style.left="324px";
          getObj('I_7_53').style.top="183px"; // Password Line 1 Textbox
          getObj('I_7_53').style.left="324px";
          getObj("I_7_53").style.width = "150px";
          getObj('I_8_1').style.top="209px"; // Password Line 2 Textbox
          getObj('I_8_1').style.left="324px";
          getObj("I_8_1").style.width = "150px";
          getObj('I_9_1').style.top="234px"; // Password Line 3 Textbox
          getObj('I_9_1').style.left="324px";
          getObj("I_9_1").style.width = "150px";
          getObj('login_button').style.top="270px"; // Login Button
          getObj('login_button').style.left="324px";
          if (getObj('quit_button') != null) {
            getObj('quit_button').style.top="270px"; // Quit Button
            getObj('quit_button').style.left="400px";
          }
       }
    }

    var backdrop = newElement(5, 15, "img", "/profoundui/userdata/genie skins/skyline/login.jpg", "backdrop_image");
    backdrop.style.zIndex = 5;
    
    var msg = get('D_24_1');
    if (msg!='' && pui.genie.alertMsg=='') {
      pui.genie.alertMsg = msg;
      if (pui.genie.alertMsg.substr(0,3) == 'CPF') pui.genie.alertMsg = pui.genie.alertMsg.substr(8);
      if (pui.genie.alertMsg.substr(0,1) == '-') pui.genie.alertMsg = pui.genie.alertMsg.substr(1);
    }
    hideElement('D_24_1');        
  }
  pui["loading animation"]["css"] = 'pui-skyline-animation';
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
      pui.genie.middleDiv.style.width = "";
      getObj("5250").style.position = "relative";
      getObj("5250").style.left = "";
      getObj("5250").style.width = "";
    }
  }

}
