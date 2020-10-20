import { useRef, useLayoutEffect, useState } from 'react'

export function useDimensions() {
  const ref = useRef<HTMLElement>(null)
  const [dimensions, setDimensions] = useState({})

  useLayoutEffect(() => {
    if (ref.current != null) {
      const observer = new ResizeObserver((entries) => {
        setDimensions(entries[0].contentRect.toJSON())
      })
      observer.observe(ref.current)

      return observer.disconnect
    }
  }, [ref])

  return [ref, dimensions]
}
