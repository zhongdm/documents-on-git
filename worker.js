onmessage = function(event) {
  let data = event.data
  console.log('worker', data)
  let ans = fibonacci(data)
  postMessage(ans)
}

function fibonacci (n) {
  return n < 2 ? n: fibonacci(n-1) + fibonacci(n-2)
}
