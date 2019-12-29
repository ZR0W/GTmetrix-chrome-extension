document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var f = d.createElement('form');
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        console.log(i)
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();

        //test editing html
        // Create a <li> node
        var node = d.createElement("LI");                 
        // Create a text node
        var textnode = d.createTextNode("Water");         
        // Append the text to <li>
        node.appendChild(textnode);                              
        // Append <li> to <ul> with id="myList"
        d.body.appendChild(node);     
      });
    }, false);
  }, false);

// I borrowed most of the code to create and submit the form 
// from the bookmarklet provided on the GTmetrix website. 
// I just modified the code to take in the URL from the currently active tab.