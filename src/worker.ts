let i = 0

const timer = () => {
  i += 1
  postMessage(i)
  setTimeout(() => {
    timer()
  }, 500)
}

timer()
