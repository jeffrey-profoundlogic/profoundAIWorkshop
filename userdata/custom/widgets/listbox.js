

// Example - creating a custom widget based on an existing one
// In this example, we create a list box ("select box" field type) with modified default properties


// Add an entry to the Widgets Toolbox
pui.toolbox.add({
  // specifies category - this can be an existing category or a new one
  // if the category does not exist, it is created on the fly
  category: "Custom Widgets",
  
  // the widget parameter determines the "field type" property of an element
  widget: "select box",
  
  text: "Custom List Box",
  icon: "/profoundui/proddata/images/icons/list_box.png",
  
  // this determines the look of the drag/drop proxy as we drag the widget element off the toolbox
  // in this case, an image of the tab panel is used
  proxyHeight: 86,
  proxyWidth: 150,
  proxyHTML: '<select size="5" style="font-family: Sans-Serif; width: 150px; color: #666666; background-color: #FAE4AA; font-size: 12px"><option>Choice 1</option><option>Choice 2</option><option>Choice 3</option><option>Choice 4</option><option>Choice 5</option></select>',
  
  // any property of a "select box" can be specified here
  defaults: {
    "select box height": "5",
    "width": "150px",
    "color": "#666666",
    "background color": "#FAE4AA",
    "choices": "Choice 1,Choice 2,Choice 3,Choice 4,Choice 5",
    "font family": "Sans-Serif",
    "font size": "12px"
  }  
  
});

