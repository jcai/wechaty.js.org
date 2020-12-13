import React from 'react'
import { QRCode } from 'react-qr-svg'

export default function QrCodeComponent (props) {
  const value = decodeURIComponent(props.match.params[0]) || 'https://wechaty.js.org/'

  return <QRCode
    bgColor="#FFFFFF00"
    fgColor="#44a838"
    level="Q"
    style={{ width: 256, padding: 10 }}
    value={value}
  />
}