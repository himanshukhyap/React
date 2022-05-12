import React, {lazy, Suspense} from 'react'

const ComA = lazy(()=>import('./ComA'))

function LazyLoad() {
  return (
      <>
    <div>before Lazy</div>
    <Suspense fallback={<div>Please Wait........</div>}>
    <ComA/>
    </Suspense>
    </>
  )
}

export default LazyLoad