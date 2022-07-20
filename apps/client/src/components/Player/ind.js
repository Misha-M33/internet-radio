const firstFunc = () => {
  return 'Hello'
}

const secondFunc = function (arg) {
  firstFunc()
}

function thirdFn(func, arg1) {
  const arg2 = 10
  func(arg2, arg1)
}

const func4 = () => console.log('Hello3')

thirdFn(func4)
thirdFn(() => console.log('Hellosdfsdfs'))
secondFunc()
firstFunc