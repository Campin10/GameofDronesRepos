export function setDataWiner(formData){
    fetch('api/StartGame/Create', {  
        method: 'POST',  
        body: formData,  
    }).then((response) => response.json())  
        .then((responseJson) => {  
            console.log(responseJson);  
        })  
}