---
layout: post
title: "¿Qué es la topología?"
date: 2024-09-13 06:07:00 -0600
categories: [Desarrollo de software]
tags: [Fundamentos de arquitectura de software]
description: Se puede definir como la composición abstracta de algo; nos ayuda con la representación de relaciones entre los nodos.....
img: /assets/img/arq-009.png
---

---

### Definición de topología

Se puede definir como la composición abstracta de algo; nos ayuda con la representación de relaciones entre los nodos. Podemos imaginarlo como un estilo de arquitectura que define las relaciones entre componentes. Como tal, no es la forma exacta, sino la forma abstracta de un sistema que se puede moldear para que cumpla con los requerimientos específicos del sistema.

Estas son las topologías más comunes en arquitectura de software:

* Monolítica: en ella, los componentes del sistema están integrados en un solo bloque o unidad. Todas las funcionalidades residen en una única aplicación.
    * Ejemplo: una aplicación web tradicional donde la lógica de negocio, la interfaz de usuario y la gestión de datos están contenidas en un solo proyecto.

![alt text](/assets/img/arq-009-1.jpg){: width="250" }

* Cliente/Servidor: el sistema se divide en dos componentes principales: el cliente, que interactúa con el usuario, y el servidor, que gestiona la lógica de negocio y los datos.
    * Ejemplo: una aplicación web donde el navegador actúa como cliente y un servidor web procesa las solicitudes y devuelve las respuestas.

![alt text](/assets/img/arq-009-2.png){: width="450" }

* Arquitectura de microservicios: el sistema se divide en servicios pequeños e independientes que se comunican entre sí a través de APIs. Cada microservicio se encarga de una parte específica de la funcionalidad total del sistema.
    * Ejemplo: un sistema de comercio electrónico donde los servicios de pago, inventario y gestión de usuarios están separados y se comunican entre ellos a través de servicios web.

![alt text](/assets/img/arq-009-3.png){: width="500" }

* Arquitectura en capas: el sistema se organiza en capas que cumplen diferentes responsabilidades, como presentación, lógica de negocio y acceso a datos. Cada capa se comunica con la adyacente.
    * Ejemplo: una aplicación empresarial donde la interfaz de usuario, la lógica de negocio y la base de datos están separadas en capas distintas.

![alt text](/assets/img/arq-009-4.png){: width="500" }

* Arquitectura en malla: los servicios en una arquitectura de malla están conectados entre sí de manera más dinámica y flexible, permitiendo la comunicación directa entre ellos sin pasar por un intermediario central.
    * Ejemplo: un sistema de microservicios que utiliza un servicio de malla para manejar la comunicación entre servicios sin tener que pasar por un controlador o API Gateway central.

![alt text](/assets/img/arq-009-5.png){: width="500" }

* Arquitectura orientada a eventos: los componentes del sistema se comunican a través de eventos, donde un evento desencadena la ejecución de uno o más componentes sin necesidad de una interacción directa.
    * Ejemplo: un sistema de notificaciones que envía correos electrónicos automáticamente cuando se produce un evento específico, como la creación de una nueva cuenta de usuario.

![alt text](/assets/img/arq-009-6.png){: width="500" }

También es importante tener en cuenta que la topología afecta directamente la escalabilidad, mantenibilidad y rendimiento del sistema. Por lo tanto, elegir la topología del sistema influye directamente en el comportamiento y las capacidades del sistema en producción.
