import { React, useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { CToast, CToastBody, CToastClose, CToaster } from '@coreui/react'

const Toast = forwardRef((props, ref) => {
  const [toast, addToast] = useState(0)
  useImperativeHandle(ref, () => ({
    showToast(message) {
      addToast(
        <CToast
          autohide={false}
          color="primary"
          className="text-white align-items-center"
          visible={true}
        >
          <div className="d-flex">
            <CToastBody>{message}</CToastBody>
            <CToastClose className="me-2 m-auto" white />
          </div>
        </CToast>,
      )
    },
  }))
  const toaster = useRef()
  return (
    <>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
})

Toast.displayName = 'Toast'

export default Toast
