

// Example - creating a custom widget

pui.widgets.add({
  // widget name - this is placed into the standard "field type" property
  name: "google maps",
  
  // the default id prefix - used to assign id's when the element is first created
  newId: "Map",
  
  // pull-down menu name
  menuName: "Google Maps Widget",
  
  // default properties for the widget
  defaults: {
    "width": "400px",
    "height": "300px",
    "z index": "25",
    "background color": "#FFFFFF"
  },
  
  // property setter functions
  propertySetters: {
  
    // this will fire when the field type property is set to "google maps" 
    // initialization code for the element should go here
    "field type": function(parms) {
      if (parms.design) {
        // design mode content creation code goes here
        // add preview image
        var img = document.createElement("img");
        img.src = "/profoundui/proddata/images/GoogleMaps.jpg";
        img.style.position = "absolute";
        img.style.left = "0px";
        img.style.top = "0px";
        //img.style.width = parms.dom.style.width;
        //img.style.height = parms.dom.style.height;
        img.style.width = "100%";
        img.style.height = "100%";
        parms.dom.appendChild(img);
        parms.dom.style.overflow = "hidden";
      }
      else {
        // runtime content creation code goes here
        // clear
        parms.dom.innerHTML = "";
        // get url property - evalProperty will evaluate any js expressions that may have been used to build the property
        address = parms.evalProperty("google maps address");
        // populate the widget's dom element 
        if (address == null || address == "") {
          parms.dom.innerHTML = "Google Maps Address property not specified.";
        }
        else {
          // here, we build an iframe element and put it into the dom
          var url = document.location.protocol + "//maps.google.com/maps?hl=enl&amp;q=" + encodeURIComponent(address) + "&amp;ie=UTF8&amp;hq=&amp;hnear=" + encodeURIComponent(address) + "&amp;output=embed";
          var html = '<iframe src="' + url;
          html += '" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"" width="100%" height="100%">';
          parms.dom.innerHTML = html;
        }
      }
    },
    "visibility": function(parms) {
      
      if (!parms.design) {
      
        var iframe = parms.dom.getElementsByTagName("iframe");
        if (iframe && iframe.length == 1) {
      
          iframe = iframe[0];
          if (parms.value == "hidden") {
          
            iframe.style.visibility = "hidden";
            iframe.style.display = "none";
          
          }
          else {
          
            iframe.style.visibility = "";
            iframe.style.display = "";
          
          }
        
        }
      
      }
    } 
  }
  
});


// the widget will already have prebuilt standard properties relating to css attributes, js events, etc.
// here, we can add additional custom properties
pui.addCustomProperty({
  // property name
  name: "google maps address", 
  
  // optional type of input
  // "long" specifies that the text can be long, and an exta text area prompt box is added
  // other types include: "color", "boolean", "image", "list", "js", "file", and "field"
  type: "long", 
  
  // help text appears at the bottom of the properties window
  help: "Specifies the full address to be mapped within Google Maps.", 
  
  // array of widget elements that this property is applicable to
  controls: ["google maps"],
  
  // properties are categorized in the properties window
  // if the specified category doesn't already exist, it will be created
  category: "Field Settings"
});


// Now, we add an entry to the left-hand side Widgets Toolbox
// More than one entry can be added for the same base widget - this would makes sense if we vary default properties
pui.toolbox.add({
  // specifies category - this can be an existing category or a new one
  // if the category does not exist, it is created on the fly
  category: "Custom Widgets",
  
  widget: "google maps",
  text: "Google Maps Widget",
  icon: "/profoundui/proddata/images/icons/google_maps.png",
  
  // this determines the look of the drag/drop proxy as we drag the widget element off the toolbox
  proxyHeight: 302,
  proxyWidth: 402,
  proxyHTML: '<img src="/profoundui/proddata/images/GoogleMaps.jpg" style="width: 400px; height: 300px;">',

  
  // additional default property values can be specified here
  defaults: {
  }  
  
});


