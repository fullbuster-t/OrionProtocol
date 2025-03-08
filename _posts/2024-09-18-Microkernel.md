---
layout: post
title: "Microkernel"
date: 2024-09-18 06:07:00 -0600
categories: [Desarrollo de software]
tags: [Fundamentos de arquitectura de software]
description: Es un estilo de arquitectura sencillo que también se llama micro-núcleo y tiene el siguiente estilo de topología.....
img: /assets/img/arq-011.webp
---

---

Es un estilo de arquitectura sencillo que también se llama micro-núcleo y tiene el siguiente estilo de topología.

![alt text](/assets/img/arq-011-1.webp){: width="500" }

En esta topología, se tiene un sistema o módulo central que realiza la funcionalidad principal del sistema. Después, se suele enriquecer este módulo central con más funcionalidades mediante plug-ins.

Ejemplo de ello son los editores de código que vienen con una funcionalidad principal, y nosotros mismos podemos agregar plug-ins que expanden y diversifican en gran medida las funcionalidades de los editores. También tenemos a los navegadores, que tienen como función principal la búsqueda de información; nosotros podemos expandirlos con plug-ins o extensiones según sea el caso.

Debemos pensar en el microkernel como un software donde la funcionalidad básica tiene muchas variaciones: un sistema de facturación en el cual, para cada uno de los clientes, se tienen variaciones diferentes respecto a los estados de la república. Aquí, el sistema central tiene una especie de plantilla y, de acuerdo a cada una de las variaciones, se genera un plug-in, de tal forma que permite que el sistema pueda crecer y evolucionar de acuerdo a las variaciones.

El módulo central de nuestro sistema puede tener su propia arquitectura; por ejemplo, puede tener una arquitectura basada en eventos, otro sistema de microkernel o puede ser basada en capas. Aquí, los estilos de arquitectura no son exclusivos.

Una de las dificultades de esta arquitectura es cómo se va a definir una forma de crear plug-ins de manera que se comuniquen de manera sencilla. Una vez que se logra esto, podemos extender nuestro software de una manera sencilla sin tener que modificar el sistema central.

![alt text](/assets/img/arq-011-2.webp){: width="500" }

¿Cuándo usarla y cuándo no?

Cuando usarla:

* Cuando queramos distribuir software de manera sencilla y seguir mejorándolo después (caso de todos los editores de texto).
* Cuando se busque que el software sea extensible; esta arquitectura nos puede permitir agregar plug-ins de manera casi infinita.
* Cuando el caso de negocio tenga muchas variaciones; podemos pensar en variaciones como leyes.
* Cuando la funcionalidad central pueda servir para muchos casos.
* Cuando quieras una arquitectura más o menos simple.

Cuando no usarla:

* Cuando el rendimiento sea muy importante; en esta arquitectura, la comunicación con el módulo central y los plug-ins puede llegar a no ser tan eficiente.
* Cuando la tolerancia a fallos sea muy importante; también es una arquitectura monolítica, por lo que no se lleva muy bien con la tolerancia a fallos.
* Cuando la escalabilidad sea muy importante; es difícil escalarlo para que acepte más peticiones por parte de los usuarios. Al ser una arquitectura monolítica, si se quiere hacer crecer este sistema, es necesario que crezca en conjunto (tanto el módulo central como los plug-ins).





