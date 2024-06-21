import { Html } from '@react-three/drei'
import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <Html>
        {/* <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='w-[10vw] h-[10vw] rounded-full'>
                Loading...
            </div>
        </div> */}
        <div className={styles.spinner}>
          <div className={styles.doubleBounce1}></div>
          <div className={styles.doubleBounce2}></div>
        </div>
    </Html>
  )
}

export default Loader