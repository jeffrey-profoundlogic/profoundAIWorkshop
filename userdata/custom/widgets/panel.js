

// Example - creating a custom panel or dialog

// Note: panels and dialogs are the same type of element
//       dialogs use a different set of corner/border images to make them look like a dialog


// Add a new panel style
// This will appear as an option in the "tab panel style" property of a panel
pui.widgets.panelStyles["Custom Panel"] = {
  // width of the left side of the panel (should match the width of the images provided in the /images/panels/ folder)
  left: 10,
  
  // width of the right side of the panel (should match the width of the images provided in the /images/panels/ folder)
  right: 10,
  
  // height of the top side of the panel, including title bar if this is a dialog (should match the height of the images provided in the /images/panels/ folder)
  top: 33,
  
  // height of the bottom side of the panel (should match the height of the images provided in the /images/panels/ folder)
  bottom: 9,
  
  // panel's background color
  background: "#f0b310",
  
  // panel title font color
  textColor: "#000000",
  
  // background color of the panel title edit box in the designer
  textBackground: "#f6d47a",
  
  // top padding in pixels for the panel title
  textTopPadding: "7px"
  
  
  // optional parameters...
  //textAlign:         // title alignment
  //fontSize:          // title font size
  //noTitle:           // true or false
  //width:             // override default width
  //height:            // override default height
  //dialog:            // true or false  
}




// Now, add an entry to the Widgets Toolbox
pui.toolbox.add({
  // specifies category - this can be an existing category or a new one
  // if the category does not exist, it is created on the fly
  category: "Custom Widgets",
  
  widget: "panel",
  text: "Custom Panel",
  icon: "/profoundui/proddata/images/panels/Custom Panel/icon.png",
  
  // this determines the look of the drag/drop proxy as we drag the widget element off the toolbox
  proxyHeight: 100,
  proxyWidth: 200,
  proxyHTML: function(defaults) {
    return pui.widgets.getPanelProxy(defaults);
  },
  
  // additional default property values can be specified here
  defaults: {
    "panel style": "Custom Panel",
    "color": "#000000"
  }  
  
});


