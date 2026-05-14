---
layout: post
title: Surface simpliﬁcation
date: 2019-01-11
permalink: /projects/surfaceSimpliﬁcation/
---

# Surface simpliﬁcation (C++)
_Contributors: Mathieu Tillet_
<hr />

This project was part of a course on **Surface Modeling**.
The aim was to implement various mesh simplification methods and compare them. We coded two main methods : 
  * Mesh simplification using QEM as described in *“Surface simpliﬁcation using quadric error metrics”*, M.Garland and P.Heckbert, 1997. 
  * A simplification of the above method as described by S.Melax in *“A simple, fast, and effective polygon reduction algorithm”*, 1998.

I was personally responsible for :
   * Creation of the 3D GUI
   * Implementation of S. Melax's method.

### Mesh simplification

Mesh simplification is a technique of dynamic Level Of Detail (LOD). It allows to display the model with different levels of details and 
save precious computing time, making it very valuable for real-time applications or video games. On the downside, it needs considerable memory so as to store 
the sequence of operation to apply to get from one LOD to another in an efficient way.

To reduce level of detail of one mesh, one needs to remove vertex from the original mesh (edge collapse operation). 
These vertex are chosen so as to lessen as much as possible visual impact of decimation. Methods like QEM or S.Melax's differ from the cost function they use to choose which edges to collapse.
![edgeCollapse.PNG](/static/projects/MS/EdgeCollapse.PNG "Edge collapse operation "){:.center-image height="300px" width="300px"}

### Results

During this project, we were able to implement both methods and create an interface to visualize our results in an user-friendly way.

*Example with a simple cube mesh:*
![ex1.PNG](/static/projects/MS/ex1.PNG "Example with a cube "){:.center-image height="500px" width="500px"}

*Examples with monster mesh with, from left to right : original mesh, 24% of vertices shown with Melax and 24% of vertices shown using QEM:*
![ex2.PNG](/static/projects/MS/ex2.PNG "Example with a Monster mesh "){:.center-image height="500px" width="500px"}
 

