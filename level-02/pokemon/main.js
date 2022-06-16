
// xhr.onreadystatechange 

// xhr.readyState
// stage 1 - request has been sent out
// stage 2 -
// stage 3 -
// stage 4 - server has responded and its time to handle data

// - Two methods are used to set up and send the HTTP request, these methods are:
// - xhr.open() - to set up the request
// - xhr.send() - to send the request


// xhr.status
// 200 = everything went well and data has arrived
// 404 = not found
// 201 = post request successfully added to data base
// 500 = something went wrong in the server

// https://api.vschool.io/pokemon

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
    }
}

function showData(arr){
        for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
        const h2 = document.createElement('h2')
        h2.textContent = arr[i].resource_uri
        h1.appendChild(h2)

    }
}

