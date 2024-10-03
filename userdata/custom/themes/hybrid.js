

pui.cnv.themes.add({
  "name": "Hybrid",
  
  "input css class": "hybrid-input",
  "constant css class": "hybrid-constant",
  "output field css class": "hybrid-output-field",
  
  "css class prefix": "",
  
  "default locale": "en_US",
  
  "left offset": 190,
  "top offset": -15,
  "column width": 8,
  "row height": 20,
  
  "extra textbox width": 4,
  
  "button type": "hyperlink",
  "button css class": "hybrid-link",
  "button top": 70,
  "button left offset": 25,
  "button width": 145,
  "button height": 23,
  "horizontal button spacing": 10,
  "vertical button spacing": 10,
  "buttons per row": 1,
  "add submit button": true,
  "submit button text": "Continue",
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
      "css class": "hybrid-grid"
    },
    "top offset": 1,
    "left offset": 5,
    "extra width": 35,
    "header rows": "auto",  // can be a numeric value or "auto"
    "merge headings": true,
    "set heading font": true,
    "show options as dropdown": false,
    "single row zoom": true,
    "header field class": "hybrid-subfile-heading"
  },
  
  "remove option labels": true,
  "remove fkey labels": true,
  
  "top line class": "top-line",
  
  "items": [
    {
      "id": "ActionsPanel",
      "field type": "output field",
      "value": "",
      "left": "5px",
      "top": "52px",
      "height": "570px",
      "width": "165px",
      "alt_height": "720px",
      "z index": "8",
      "locked in place": "true",
      "css class": "hybrid-actions",
      "css class 2": "stationary"
    },
    {
      "id": "HeadingPanel",
      "field type": "output field",
      "left": "5px",
      "top": "0px",
      "width": "940px",
      "height": "44px",
      "alt_width": "1290px",
      "z index": "8",
      "locked in place": "true",
      "css class": "hybrid-heading2",
      "css class 2": "stationary"
    }
  ],
  
  "windows": {
    "panel style": "Sapphire",
    "title text align": "center",
    "top offset": 45,
    "bottom offset": 85,
    "left offset": 15,
    "right offset": 15,
    "button type": "button",
    "button css class": "hybrid-button",
    "button offset": -40,
    "button width": 80,
    "horizontal button spacing": 10,
    "vertical button spacing": 10,
    "buttons per row": "auto"  // determined automatically based on the width of the window
  }
  
});

