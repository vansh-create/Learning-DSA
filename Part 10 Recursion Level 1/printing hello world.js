function hello(n){
    if(n==0) return
    console.log("Hello World.")
    hello(n-1)
}

hello(0)