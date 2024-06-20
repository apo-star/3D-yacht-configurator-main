import gsap from 'gsap'
import { MeshBasicMaterial } from 'three'
import { memo, useEffect, useRef } from 'react'

import { Environment } from '@react-three/drei'
import useDarkModeStore from '@/store/zustand/darkMode'

const Paranoma = () => {
  const nightRef = useRef<MeshBasicMaterial>(null)

  const dayToNight = () => {
    gsap.to(nightRef.current, {
      overwrite: true,
      opacity: 1,
      duration: 2,
      ease: 'power2.out'
    })
  }

  const nightToDay = () => {
    gsap.to(nightRef.current, {
      overwrite: true,
      opacity: -0.2,
      duration: 2,
      ease: 'power2.out'
    })
  }

  const darkMode = useDarkModeStore((state) => state.darkMode)

  useEffect(() => {
    if (nightRef.current) {
      if (darkMode) dayToNight()
      else nightToDay()
    }
  }, [darkMode])
  return (
    <group>
      <Environment
        files={darkMode ? '/hdr/env.hdr' : '/hdr/daySky.hdr'}
        background
      />
      {/* <mesh>
        <sphereGeometry args={[50, 100, 100]} />
        <meshBasicMaterial
          map={texture1}
          side={DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[49, 100, 100]} />
        <meshBasicMaterial
          map={texture2}
          side={DoubleSide}
          ref={nightRef}
          transparent
        />
      </mesh> */}
    </group>
  )
}

export default memo(Paranoma)
