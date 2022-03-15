import React from 'react'
import Priority from './Priority'
import Money from './Money'
import Security from './Security'

const Features = () => {
  return (
   <section className="features">
      <h2 className="sr-only">Features</h2>
      <Priority/>
      <Money/>
      <Security/>
   </section>
)
}

export default Features