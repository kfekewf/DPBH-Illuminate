 document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mouseover', function (event) {
      if (event.target.nodeType === 3 || ['P', 'SPAN', 'A', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI'].includes(event.target.nodeName)) {
        // Remove the 'hova' class from all elements
        var elements = document.querySelectorAll('.hova');
        elements.forEach(function (element) {
          element.classList.remove('hova');
        });

        // Add the 'hova' class to the element being hovered
        event.target.classList.add('hova');
        // Log the highlighted text to the console
        var highlightedText = event.target.textContent || event.target.innerText;
        console.log('Highlighted Text:', highlightedText);
      }
    });
  });