import { useEffect } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import helvetiker from 'three/examples/fonts/helvetiker_regular.typeface.json'

export function useHeroScene(mountRef) {
  useEffect(() => {
    const mountNode = mountRef.current

    if (!mountNode) {
      return undefined
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 1000)
    camera.position.set(0, 0, 14)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountNode.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.9)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0x8edced, 2)
    keyLight.position.set(7, 8, 9)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xfff8eb, 1.2)
    fillLight.position.set(-6, -3, 8)
    scene.add(fillLight)

    const backLight = new THREE.PointLight(0x67c5db, 24, 40)
    backLight.position.set(0, 0, -8)
    scene.add(backLight)

    const font = new FontLoader().parse(helvetiker)
    const geometry = new TextGeometry('yashwanth', {
      font,
      size: 1.45,
      depth: 0.55,
      curveSegments: 14,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.05,
      bevelOffset: 0,
      bevelSegments: 6,
    })

    geometry.center()

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xfffcf7,
      metalness: 0.78,
      roughness: 0.18,
      transmission: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      transparent: true,
      opacity: 0,
    })

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x7fc9dc,
      transparent: true,
      opacity: 0,
    })

    const textGroup = new THREE.Group()
    const textMesh = new THREE.Mesh(geometry, material)
    const glowMesh = new THREE.Mesh(geometry, glowMaterial)
    glowMesh.position.set(0.08, -0.05, -0.25)
    textGroup.add(glowMesh)
    textGroup.add(textMesh)
    textGroup.rotation.x = -0.16
    textGroup.scale.setScalar(0.84)
    scene.add(textGroup)

    const resizeRenderer = () => {
      const width = mountNode.clientWidth
      const height = mountNode.clientHeight

      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    resizeRenderer()
    window.addEventListener('resize', resizeRenderer)

    let frameId = 0

    const start = performance.now()

    const animate = (now) => {
      frameId = window.requestAnimationFrame(animate)

      const elapsed = (now - start) / 1000
      const introProgress = Math.min(elapsed / 1.2, 1)
      const eased = 1 - (1 - introProgress) ** 3

      material.opacity = eased
      glowMaterial.opacity = 0.28 * eased
      textGroup.scale.setScalar(0.84 + 0.16 * eased)
      textGroup.rotation.y = -0.24 + Math.sin(elapsed * 0.8) * 0.16
      textGroup.rotation.x = -0.12 + Math.cos(elapsed * 0.6) * 0.035
      textGroup.position.y = Math.sin(elapsed * 1.1) * 0.16
      glowMesh.position.x = 0.08 + Math.sin(elapsed * 1.2) * 0.03

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resizeRenderer)
      geometry.dispose()
      material.dispose()
      glowMaterial.dispose()
      renderer.dispose()

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement)
      }
    }
  }, [mountRef])
}
