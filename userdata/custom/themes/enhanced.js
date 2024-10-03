

pui.cnv.themes.add({
  "name": "Enhanced",
  
  "input css class": "enhanced-input",
  "constant css class": "enhanced-constant",
  "output field css class": "enhanced-output-field",
  
  "css class prefix": "",
  
  "default locale": "en_US",
  
  "left offset": 150,
  "top offset": 0,
  "column width": 8,
  "row height": 20,
  
  "extra textbox width": 4,
  
  "button type": "styled button",
  "button style": "Ice Blue",
  "button width": 100,
  "button height": 23,
  "horizontal button spacing": 20,
  "vertical button spacing": 10,
  "buttons per row": 1,
  "add submit button": true,
  "buttons start at the top": true,
  
  "show fkey name": false,
  "show fkey text": true,
  "page down text": "Next Page",
  "page up text": "Previous Page",
  "allow field exit": false,
  
  "grid": {
    "properties": {
      "header height": "20",
      "row height": "20",
      "css class": "crystal-grid"
    },
    "top offset": 1,
    "left offset": 5,
    "extra width": 35,
    "header rows": "auto",  // can be a numeric value or "auto"
    "merge headings": false,
    "set heading font": true,
    "show options as dropdown": true,
    "single row zoom": true,
    "header field class": "enhanced-subfile-heading"
  },
  
  "remove option labels": true,
  "remove fkey labels": true,
  
  "top line class": "top-line",
  
  "items": [
    {
      "id": "ActionsPanel",
      "field type": "panel",
      "panel style": "Sapphire",
      "value": "Actions",
      "text align": "center",
      "left": "5px",
      "top": "15px",
      "height": "640px",
      "width": "125px",
      "alt_height": "720px",
      "z index": "8",
      "locked in place": "true"
    },
    {
      "id": "MainPanel",
      "field type": "panel",
      "panel style": "Sapphire",
      "left": "135px",
      "top": "15px",
      "width": "740px",
      "height": "640px",
      "alt_width": "1090px",
      "alt_height": "720px",
      "z index": "8",
      "locked in place": "true"
    }
  ],
  
  "windows": {
    "panel style": "Modern Dialog",
    "title text align": "center",
    "top offset": 45,
    "bottom offset": 85,
    "left offset": 15,
    "right offset": 15,
    "button offset": -40,
    "button width": 80,
    "horizontal button spacing": 10,
    "vertical button spacing": 10,
    "buttons per row": "auto"  // determined automatically based on the width of the window
  }
  
});

