import React, { useState, useEffect, useRef} from 'react'
import { createPortal} from 'react-dom'

const CustomPortal : React.FC = (props) => {
    const [isMounted, setIsMounted] = useState(false)
    const container = useRef<HTMLElement | null>(null)
    
    useEffect(() => {
        setIsMounted(true)
        
        return () => {
            container.current = null
            setIsMounted(false)
        }
    }, [container])
    

    return isMounted ? createPortal(props.children, document.getElementById('portal') as HTMLElement) : null 
}

export default CustomPortal