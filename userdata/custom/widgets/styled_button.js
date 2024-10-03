

// Example - creating a gradient / styled button

// Add a new button style
// This will appear as an option in the "button style" property of a styled button

pui.widgets.buttonStyles["Custom Button"] = {

  // width of the left side of the button (should match the width of the images provided in the /images/buttons/ folder)
  left: 23,
  
  // width of the right side of the button (should match the width of the images provided in the /images/buttons/ folder)  
  right: 23,
  
  // height of the top side of the button (should match the height of the images provided in the /images/buttons/ folder)
  top: 10,
  
  // height of the bottom side of the button (should match the height of the images provided in the /images/buttons/ folder)
  bottom: 10,
  
  // determines if the button has a separate set of images for when the user hovers the mouse over it
  hasOverState: false,
  
  // determines if the button has a separate set of images for when the user clicks it
  hasClickState: false,
  
  // color of text within the button
  textColor: "#000000",
  
  // edit box background color used in inline editing within the visual designer    
  editBackgroundColor: "#eca430",
  
  // default button width
  width: 125
  
  // optional parameters...
  //clickStateIsNormalState:    // set to true if the click state images are the same as the normal state images 
  //hiColor:                    // highlight color
}




// Now, add an entry to the Widgets Toolbox
pui.toolbox.add({
  // specifies category - this can be an existing category or a new one
  // if the category does not exist, it is created on the fly
  category: "Custom Widgets",
  
  widget: "styled button",
  text: "Custom Styled Button",
  icon: "/profoundui/proddata/images/buttons/Custom Button/icon.png",
  
  // this determines the look of the drag/drop proxy as we drag the widget element off the toolbox
  proxyHeight: 23,
  proxyWidth: 125,
  proxyHTML: function(defaults) {
    return pui.widgets.getStyledButtonProxy(defaults);
  },
  
  // additional default property values can be specified here
  defaults: {
    "button style": "Custom Button",
    "width": "125px",
    "color": "#000000"
  }  
  
});


