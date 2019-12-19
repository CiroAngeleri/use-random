import React from 'react'

import { useMyHook } from 'use-random'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
