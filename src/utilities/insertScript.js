function insertScript(url, location) {
  const script = document.createElement('script')
  script.src = url

  if (location === 'head') {
    document.head.appendChild(script)
  } else if (location === 'body') {
    document.body.appendChild(script)
  }
}

export default insertScript
