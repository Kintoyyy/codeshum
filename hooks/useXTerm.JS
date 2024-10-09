import React, { useRef, useEffect } from 'react'
import { useXTerm } from 'react-xtermjs'

const MyTerminal = () => {
    const { instance, ref } = useXTerm()
    instance?.writeln('Hello from react-xtermjs!')
    instance?.onData((data) => instance?.write(data))

    return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}