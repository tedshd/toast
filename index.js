(() => {
  const toast = (arg) => {
    const message = typeof arg === 'string' ? arg : arg.message
    const duration = arg.duration || 3000
    const toast = document.createElement('div')
    toast.style.cssText = `
      position: fixed;
      top: 10px;
      left: 50%;
      box-sizing: border-box;
      transform: translateX(-50%);
      padding: 14px 16px;
      background-color: rgba(50, 47, 53, 1);
      color: #fff;
      border-radius: 4px;
      z-index: 999999;
      transition: top .5s;
    `
    toast.innerText = message
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.style.top = '-100px'
      setTimeout(() => {
        document.body.removeChild(toast)
      }, 500)
    }, duration)
  }

  window.toast = toast
})()