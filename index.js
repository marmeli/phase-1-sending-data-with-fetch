// Add your code here
function submitData(name, email){
    const formData = {
        name: name,
        email: email,
    };
    const configurationObject = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    const newId = object.id;
    document.body.innerHTML += newId;
  })
  .catch(function (error) {
    document.body.innerHTML += error.message;
  });
}
