 document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mouseover', function (event) {
      if (event.target.nodeType === 3 || ['P', 'SPAN', 'A', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI'].includes(event.target.nodeName)) {
        
        var highlightedText = event.target.textContent || event.target.innerText;
        const check = { highlightedText};
        var result = dpcheck(check);
        if (result ===1)
        {
        // Remove the 'hova' class from all elements
        var elements = document.querySelectorAll('.hova');
        elements.forEach(function (element) {
          element.classList.remove('hova');
        });

        // Add the 'hova' class to the element being hovered
        event.target.classList.add('hova');
        // // Log the highlighted text to the console
        // var highlightedText = event.target.textContent || event.target.innerText;
        // console.log('Highlighted Text:', highlightedText);
        }
      }
    });
  });
  function dpcheck(data) {
    // Replace with your Flask backend URL
    const apiUrl = 'http://localhost:5000/predict';

    // Make a POST request to the backend
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(prediction => {
        // Handle the prediction received from the backend
        return prediction;
    })
    .catch(error => {
        console.error('Error sending data to backend:', error);
    });
}
