(() => {
  const toast = (arg) => {
    let timer = null;
    let clearStatus = false;
    const message = typeof arg === 'string' ? arg : arg.message;
    const duration = arg.duration || 4000;
    const transition = arg.transition ?? true;
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 50px;
      left: 50%;
      box-sizing: border-box;
      transform: translateX(-50%);
      width: 90%;
      padding: 10px 16px;
      background-color: rgba(0, 0, 0, .6);
      color: #fff;
      border-radius: 8px;
      z-index: 999999;
      display: flex;
      align-items: center;
      column-gap: 16px;
      opacity: 0;
      word-break: break-all;
    `;
    toast.classList.add('authme-toast');

    const clear = () => {
      if (!clearStatus) {
        clearStatus = true;
        document.body.removeChild(toast);
        clearTimeout(timer);
      }
    };

    if (transition) {
      toast.style.transition = 'opacity .3s ease-in';
      setTimeout(() => {
        toast.style.opacity = '1';
      }, 300);
    } else {
      toast.style.opacity = '1';
    }
    toast.innerHTML = message;
    document.body.appendChild(toast);
    timer = setTimeout(() => {
      clearStatus = true;
      toast.style.opacity = '0';
      toast.style.transition = 'opacity .3s ease-out';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 500);
    }, duration);

    return {
      clear,
    };
  };

  window.toast = toast
})()