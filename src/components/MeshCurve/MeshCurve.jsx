import { extend, useFrame } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial,  } from 'meshline';
import { useRef } from 'react';

extend({ MeshLineGeometry, MeshLineMaterial });

export const MeshCurve = ({
  points,
  dashArray,
  color,
  dashRatio,
  lineWidth,
  speed,
}) => {
  const line = useRef();
  const material = useRef();

  useFrame(() => {
    material.current.uniforms.dashOffset.value -= 0.0001 * speed;
  });

  return (
    <mesh>
      {/* @ts-ignore */}
      <meshLineGeometry ref={line} attach="geometry" points={points} />
      {/* @ts-ignore */}
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest
        lineWidth={lineWidth}
        color={color}
        dashArray={dashArray}
        dashRatio={dashRatio}
      />
    </mesh>
  );
};

MeshCurve.defaultProps = {
  color: '#000000',
  dashArray: 0.05,
  dashRatio: 0.05,
  lineWidth: 0.1,
  speed: 1,
};