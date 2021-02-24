import React, { useEffect } from 'react'

import './FadeInAnimation.css'

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef()

  useEffect(() => {
    const currentRef = domRef
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(currentRef.current)
    return () => observer.unobserve(currentRef.current)
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection