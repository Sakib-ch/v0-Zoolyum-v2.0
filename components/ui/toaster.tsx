"use client"

import { Toast, ToastClose, ToastDescription, ToastTitle } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-0 z-[100] flex flex-col gap-2 p-4 max-h-screen w-full sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col-reverse sm:max-w-[420px]">
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
    </div>
  )
}
