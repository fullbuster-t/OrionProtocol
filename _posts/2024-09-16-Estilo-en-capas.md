---
layout: post
title: "Estilo en capas"
date: 2024-09-16 06:07:00 -0600
categories: [Desarrollo de software]
tags: [Fundamentos de arquitectura de software]
description: Se caracteriza por ser el más sencillo de entender y ejecutar; además, es barato de implementar.....
img: /assets/img/arq-010.png
---

---

Se caracteriza por ser el más sencillo de entender y ejecutar; además, es barato de implementar. Tiene componentes que se posicionan uno sobre otro o uno después de otro.

Lo que es bastante característico de esta arquitectura es que las capas solo pueden comunicarse entre la capa anterior y la capa que está después de ella. Teniendo en cuenta el siguiente diagrama, el objetivo de este estilo de arquitectura es que la capa 1 no tenga comunicación con la capa 4. Esto evita que se tengan dependencias cruzadas y que el software sea complejo de entender. A pesar de ser sencillo de implementar, también se tienen variaciones de esta topología.

![alt text](/assets/img/arq-010-1.png){: width="500" }

### Variantes de la topología

![alt text](/assets/img/arq-010-2.png){: width="500" }

Dependiendo de los requerimientos, en ocasiones se necesitará que alguna capa tenga comunicación con una capa con la que no debería tener comunicación. Esta capa se denomina “capa abierta”; esto hace que se rompa el estilo de arquitectura y también que la complejidad incremente en cierto grado.

Para entender mejor esto, usaremos como ejemplo el patrón de arquitectura MVC.

![alt text](/assets/img/arq-010-3.png){: width="600" }

Dentro de este patrón se manejan las capas de vista, controlador y modelo:

* Vista: es la capa que interactúa con los usuarios finales, puede ser mediante interfaces gráficas, APIs u otro medio que permita a los usuarios usar el sistema.
* Controlador: dirige las peticiones de los usuarios hacia el receptor que responderá a las peticiones que el usuario haga a través de la capa vista.
* Modelo: encapsula el dominio del negocio y se asegura de que se cumpla con la funcionalidad del sistema; generalmente incluye la conexión con la base de datos y la persistencia.

### ¿Cómo sabemos cuando usarla y cuando no?

Es una manera muy fácil de organizar el software; este estilo evita que se crucen componentes, peticiones y dependencias. Cuando se piensa en un sistema modular, normalmente se dividen las funciones del sistema en diferentes módulos, pero si se hace uso indiscriminado de todos los módulos respecto a todos los demás, se crea el llamado “código espagueti”, que es muy difícil de mantener.

La arquitectura en capas nos brinda una estructura que nos permite desarrollar el software de manera mantenible a lo largo del tiempo.

Se puede recurrir a esta arquitectura cuando no se han establecido completamente los requerimientos del software. Al ser simple y sencilla, su implementación es rápida y no supone grandes costos.

![alt text](/assets/img/arq-010-4.png){: width="700" }

No debe usarse cuándo: 

Como se trata de un sistema “monolítico”, es difícil que pueda dividirse para que diversas personas trabajen sobre él; de tal forma, el trabajo colaborativo representa complicaciones.

Si se requiere escalabilidad, tendremos muchos problemas para implementarla. En esta arquitectura, si se quiere hacer crecer algo, es necesario que crezca en conjunto; esto supone gastos adicionales, tiempo y personal.

