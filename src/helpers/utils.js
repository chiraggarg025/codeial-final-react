export function getFormBody(params){
 
    let fromBody = [];
    for(let property in params){
        let encodedKey = encodeURIComponent(property); //'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]);//'chirag 123'=> chirag%20123
        fromBody(encodedKey+'='+encodedValue);
    }

    return fromBody.join('&');
}