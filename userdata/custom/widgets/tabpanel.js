

// Example - creating a custom tab panel


// Add a new tab style
// This will appear as an option in the "tab panel style" property of a tab panel
pui.widgets.tabStyles["Custom Tab Panel"] = {
  // determines if images are provided in the /images/tabs/ folder for drawing the tabs
  useImages: false,
  
  // determines the tab height in pixels
  height: 15,
  
  // default background color
  defaultBackColor: "#FAE5AF", 
  
  // highlight color
  hiColor: "#666699"
  
  // optional parameters...
  //hiImages:          // determines if hover highlight images are provided (true/false)
  //leftWidth:         // width of the image of the left side of the tab
  //rightWidth:        // width of the image of the right side of the tab
  //selColor:          // selected color
  //borderColor:  
  //leftMargin: 
  //hiUnderline:       // true or false
  //selBold:           // bold when selected (true/false)
  //separated:         // true or false
  //backBar:           // true or false
  //backBarColor: 
  //borderSize:   
}




// Now, add an entry to the Widgets Toolbox
pui.toolbox.add({
  // specifies category - this can be an existing category or a new one
  // if the category does not exist, it is created on the fly
  category: "Custom Widgets",
  
  widget: "tab panel",
  text: "Custom Tab Panel",
  icon: "/profoundui/proddata/images/tabs/custom/icon.png",
  
  // this determines the look of the drag/drop proxy as we drag the widget element off the toolbox
  // in this case, an image of the tab panel is used
  proxyHeight: 202,
  proxyWidth: 302,
  proxyHTML: '<img src="/profoundui/proddata/images/tabs/custom/proxy.png" style="height: 202px; width: 302px;">',
  
  // additional default property values can be specified here
  defaults: {
    "tab panel style": "Custom Tab Panel"
  }  
  
});

