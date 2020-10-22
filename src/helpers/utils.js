export function getFormBody(params){
 
    let formBody = [];
    for(let property in params){
        let encodedKey = encodeURIComponent(property); //'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]);//'chirag 123'=> chirag%20123
        formBody.push(encodedKey+'='+encodedValue);
    }

    return formBody.join('&');
}