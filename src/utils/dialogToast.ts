type ToastType = "success" | "error" | "warning" | "delete" | "info";

export function showDialog(
  message: string,
  type: ToastType = 'info',
  confirm: boolean = false
): Promise<boolean | void> {
  return new Promise((resolve) => {
    let overlay = document.getElementById('custom-toast-dialog') as HTMLDivElement | null

    const config: Record<ToastType, { color: string; title: string; icon: string }> = {
      success: { color: '#6BC04B', title: 'Success', icon: '✓' },
      error: { color: '#DC2626', title: 'Error', icon: '!' },
      warning: { color: '#F59E0B', title: 'Warning', icon: '!' },
      delete: { color: '#B91C1C', title: 'Deleted', icon: '✕' },
      info: { color: '#2563EB', title: 'Info', icon: 'i' },
    }

    if (overlay) overlay.remove()

    overlay = document.createElement('div')
    overlay.id = 'custom-toast-dialog'

    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      background: 'rgba(0,0,0,0.45)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '9999',
    })

    const card = document.createElement('div')
    Object.assign(card.style, {
      background: '#fff',
      borderRadius: '18px',
      width: '360px',
      padding: '44px 28px 28px',
      textAlign: 'center',
      boxShadow: '0 20px 45px rgba(0,0,0,0.25)',
      position: 'relative',
      animation: 'scaleIn 0.25s ease',
    })

    const iconEl = document.createElement('div')
    Object.assign(iconEl.style, {
      position: 'absolute',
      top: '-34px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '68px',
      height: '68px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '34px',
      fontWeight: '700',
      boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
    })

    const titleEl = document.createElement('h2')
    Object.assign(titleEl.style, {
      margin: '8px 0 10px',
      fontSize: '22px',
      fontWeight: '700',
      color: '#111827',
    })

    const msgEl = document.createElement('p')
    Object.assign(msgEl.style, {
      fontSize: '15px',
      lineHeight: '1.5',
      color: '#6B7280',
      marginBottom: '26px',
    })

    const btnWrap = document.createElement('div')
    btnWrap.style.display = 'flex'
    btnWrap.style.gap = '12px'

    const okBtn = document.createElement('button')
    okBtn.textContent = confirm ? 'Confirm' : 'OK'
    Object.assign(okBtn.style, {
      flex: 1,
      padding: '12px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      color: '#fff',
    })

    const cancelBtn = document.createElement('button')
    cancelBtn.textContent = 'Cancel'
    Object.assign(cancelBtn.style, {
      flex: 1,
      padding: '12px',
      border: '1px solid #E5E7EB',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      background: '#fff',
      color: '#374151',
    })

    okBtn.onclick = () => {
      overlay!.remove()
      resolve(confirm ? true : undefined)
    }

    cancelBtn.onclick = () => {
      overlay!.remove()
      resolve(false)
    }

    overlay.onclick = (e) => {
      if (e.target === overlay) {
        overlay!.remove()
        resolve(false)
      }
    }

    const { color, title, icon } = config[type]
    iconEl.textContent = icon
    iconEl.style.background = color
    titleEl.textContent = title
    msgEl.textContent = message
    okBtn.style.background = color

    btnWrap.append(okBtn)
    if (confirm) btnWrap.append(cancelBtn)

    card.append(iconEl, titleEl, msgEl, btnWrap)
    overlay.appendChild(card)
    document.body.appendChild(overlay)
  })
}


export function showToast(message: string, type: ToastType = "info"): void { let toast = document.getElementById("custom-toast") as HTMLElement | null;
    
// Create element if it doesn't exist
if (!toast) { 
    toast = document.createElement("div");
    toast.id = "custom-toast";
    Object.assign(toast.style, {
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "14px 24px",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "15px",
        fontWeight: "500",
        zIndex: "9999",
        opacity: "0",
        transition: "opacity 0.3s ease, bottom 0.6s ease",
    });
    document.body.appendChild(toast);
}

// Define colors with type
const colors: Record<ToastType, string> = {
    success: "#4CAF50",
    error: "#f44336",
    warning: "#FF9800",
    delete: "#E53935",
    info: "#2196F3",
};

// Set message and color
toast.textContent = message; toast.style.backgroundColor = colors[type];
// Show toast
toast.style.opacity = "1";
toast.style.bottom = "50px";

// Hide after 3 seconds
setTimeout(() => {
    toast!.style.opacity = "0";
    toast!.style.bottom = "30px";
}, 3000);
}