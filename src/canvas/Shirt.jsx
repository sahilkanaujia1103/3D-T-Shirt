import React from 'react'
import { useGLTF,Decal,useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot} from 'valtio'
import {easing} from "maath"
import state from '../store'
import { Group } from 'three/examples/jsm/libs/tween.module.js'

const Shirt = () => {
    const snap =useSnapshot(state)
    const {nodes,materials}=useGLTF("/shirt_baked.glb")

    const logoTexture=useTexture(snap.logoDecall)
    const fullTexture=useTexture(snap.fullDecall)
   
    useFrame((state,delta)=>{
        easing.dampC(materials.lambert1.color,snap.color,0.25,delta)
    })
    const stateString=JSON.stringify(snap)
    
  return (
    <group key={stateString}>
        <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        >
       {
        snap.isFullTexture&&<Decal
            position={[0,0,0]}
            rotation={[0,0,0]}
            map={fullTexture}
            scale={1}

        />
       }
       {
        snap.isLogoTexture&&<Decal
            position={[0,0.04,0.15]}
            rotation={[0,0,0]}
            map={logoTexture}
            scale={0.15}
            // map-anisotropy={16}
            depthTest={false}
             depthWite={true}

        />
       }

        </mesh>
    </group>
  )
}

export default Shirt