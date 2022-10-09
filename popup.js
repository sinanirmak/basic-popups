pop = { 
  pWrap : null, 
  pTitle : null, 
  pText : null, 
  init : () => {
    pop.pWrapper = document.createElement("div"); 
    pop.pWrapper.id = "popup_wrapper"; document.body.appendChild(pop.pWrapper);
  }, 
  
  up : (title, text) => {
    pop.init();
        
    $("#popup_wrapper").empty();
    $("#popup_wrapper").html('<div id="popup_box"><h1 id="popup_title">' + title + '</h1><div id="popup_content">' + text + '</div><div id="popup_close" onclick="pop.close()">&#9746;</div></div>');
    $(pop.pWrapper).addClass("open"); 
    }, 
        
    close : () => { 
        $(pop.pWrapper).removeClass("open"); 
        $(pop.pWrapper).remove();
    } 
};