function insertScript(url, location, loadtype) {
  const script = document.createElement('script')
  script.src = url

  if (location === 'head') {
    document.head.appendChild(script)
  } else if (location === 'body') {
    document.body.appendChild(script)
  }

  if (loadtype === 'async') {
    script.async = true
  } else if (loadtype === 'defer') {
    script.defer = true
  }
}

export default insertScript
