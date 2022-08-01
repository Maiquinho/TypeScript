/**
 * 
 * As inferências literais servem para reforçar nossa tipagem no código.
 * 
 * No exemplo abaixo, a função requestAPI já possui um literal typing, porém na sua chamada se não  *  * definirmos seja com um type ou com uma interface o valor que deve ser recebido (literal typing) ainda ainda assim o typescript irá informar que precisamos reforçar esse código.
 * 
 * No exemplo abaixo sem o uso de type ou interface o VSCode exibe esse erro:
 * O argumento do tipo 'string' não é atribuível ao parâmetro do tipo '"GET" | "POST"'.ts(2345)
 * 
 */




function requestAPI(url: string, method: 'GET' | 'POST'){
    // .....
}

type RequestAPI = {
    url: string,
    method: 'GET' | 'POST'
};

let googleReq: RequestAPI = {
    url: 'http://google.com',
    method: 'GET'
}

requestAPI(googleReq.url, googleReq.method);