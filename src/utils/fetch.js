import 'whatwg-fetch';
function checkStatus(res){
  if(res.status >= 200 && res.status < 300){
    return res
  }
}
function parseJson (res){
  return res.json();
}
export default function request(url,option){
  return fetch(url,option).then(checkStatus).then(parseJson).then(data => ({data})).catch(error =>({error}))
}
