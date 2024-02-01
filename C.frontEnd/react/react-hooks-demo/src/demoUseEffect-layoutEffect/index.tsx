import { useEffect, useLayoutEffect, useState } from 'react'
function Index() {
  const [a,setA] = useState(0)

  useLayoutEffect(() => {
    // axios.get....
  }, []);

  return (
    <div>
      {a}
    </div>
  )
}

export default Index
