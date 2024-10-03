
var oe = {};  // namespace for order entry application

oe.forceOffline = false;

oe.ctlName = "OrdCtl";
oe.sflName = "OrdSfl";
oe.localDisplayPath = "profoundui/userdata/dspf/OrdEntryD.json";
oe.offlineModeText = "Offline Mode";

oe.count = 0;
oe.headerData = {};

// show offline order entry screen
oe.show = function() {
  var gridData = [];
  for (var line = 1; line <= 10; line++) {
    gridData.push({ "Line": line });
    }
  var data = { 
    "Mode": oe.offlineModeText,
  };
  data[oe.sflName] = gridData;
  for (var varName in oe.headerData) {
    data[varName] = oe.headerData[varName];
  }
  pui.show({
    path: oe.localDisplayPath,
    format: oe.ctlName,
    data: data,
    handler: function(response) {
      if (response["btnExit"] == "1") {
        getObj("pui").innerHTML = "Exiting order entry...";
        if (navigator["app"] != null && navigator["app"]["exitApp"] != null) { // Check for exitApp api in PhoneGap
            navigator["app"]["exitApp"](); 
        }
      }
      else {
        var order = {};
        for (var varName in response) {
          if (varName == "aid") continue;
          var fmt = oe.sflName.toUpperCase();
          var value = response[varName];
          if (varName.indexOf(".") == -1) {
            oe.headerData[varName] = value;  // save header data, so it can be redisplayed
            fmt = oe.ctlName.toUpperCase();
         }
         if (varName.indexOf(".rrn") >= 0) varName = "rrn"; 
         else varName = varName.toUpperCase();
         order[fmt + "." + varName] = value;  // save info to local storage in the same format we post to the RPG program
        }
        order[oe.ctlName.toUpperCase() + ".AUTO"] = "1";  // this flag indicates auto-submitted order
        var orders = localStorage["orders"];
        if (orders == null || orders == "") orders = [];
        else orders = JSON.parse(orders);
        orders.push(order);
        localStorage["orders"] = JSON.stringify(orders);
        oe.show();
        alert("Order saved locally to your device.");
      }
    }
  });
}

// this function is assigned to the onload event of the order entry screen
// it will synchrnize any orders stored in local storage when we're reconnected to the server again
oe.onload = function() {
  if (get("Mode") == oe.offlineModeText) return;
  if (oe.forceOffline) {
    oe.show();
    return;
  }
  var orders = localStorage["orders"];
  if (orders == null || orders == "") orders = [];
  else orders = JSON.parse(orders);
  if (orders.length == 0) {
    if (get("Saved") == "1") {
      alert("Order submitted to server.");
    }
    return;
  }
  var order = orders.splice(0,1)[0];
  oe.count++;
  localStorage["orders"] = JSON.stringify(orders);
  pui.submitResponse(order);
  if (orders.length == 0) {
      alert(oe.count + " locally stored order(s) successfully submitted to server.");
  }
}

pui.onoffline = function() {
  oe.show();
}