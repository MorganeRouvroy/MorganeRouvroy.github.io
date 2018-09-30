---
layout: post
title: 3D dinosaur scene
date: 2018-05-08
permalink: /projects/dinosaur3D/
---

# 3D scene : dinosaur (Python / OpenGL4)
_Contributors: Mathieu Tillet_
<hr />

This project was the final assignment for the **3D computer graphics** course.
We were required to provide solutions for the modeling, rendering, animation and interaction of a prehistoric dinosaur scene, with animated and/or interactive elements.

Click the image to see a small demo of the result:
[![](/static/projects/dino/dino_demo_cover.jpg){: .center-image}](/static/projects/dino/dino_demo.mp4)

I was responsible for :
   * Modeling : heightmap generated ground
   * Rendering : all light and texturing effects  
       * Phong lighting model
       * Fog effect in the distance
       * Skybox
       * Water using DuDv and normal mapping, Fresnel effect, specular light, border smoothing
   * Animation : day/night sky keyframes animations
   * Gameplay : 3rd person camera tracking and character keyboard controls



## Controls
The rendered scene shows a keyboard controlled raptor on an deserted island.\\
\\
The user have some basic controls over the scene :
   * **Raptor controls** :\\
    The raptor can be controlled by the user via the keyboard : ZQSD movement, Shift to run and R to roar.
    The raptor cannot move into the water after a certain depth.
   * **Camera controls** :\\
   The 3rd person camera automatically tracks the raptor movement and can be tweaked using the mouse to change zoom, inclination and rotate around the raptor.

## Rendering effects

This project was the opportunity to implement and try several rendering effects, most of them dealt with in the shaders.

**Fog**\\
To prevent abrupt disappearance of object when they go out of the camera viewing distance, a fog effect applies on all objects of the scene, making them seem to disappear gradually.

**Water**\\
The water requires 3 pass to be rendered. The first two pass
The first two passes allow to store respectively everything above and below the water in buffers. These two textures are then used as reflection and refraction textures for final rendering.\\
For more realism, several effects have been added to the water. A normal map, determine the normal of the water surface and amplifies its relief. The water is also animated using a DuDv map, allowing to distort directly in the shader the textures, giving an illusion of movement. Similarly, a Fresnel effect has been added: depending on the camera's inclination with respect to the water, refraction and reflection more or less predominate in the final texture of the water. Effects of specular light have also been added. Finally, water depth is taken into account for several effects, in particular the softening of the edges: the closer we get to the water/land boundaries, the more transparent the water becomes, allowing a smooth transition with the terrain.

## Improvements to be added

Some effects still need some work and might be added at a further time :
 * **Collision detection** : the current implementation is too slow and was therefore disabled until optimized.
 * **Shaddow mapping**
