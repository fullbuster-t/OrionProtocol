---
layout: post
title: "Microservicios"
date: 2024-09-25 06:07:00 -0600
categories: [Desarrollo de software]
tags: [Fundamentos de arquitectura de software]
description: Como ya se ha ejemplificado anteriormente, las topologías hacen referencia a la estructura de cada arquitectura.....
img: /assets/img/arq-014.png
---

---

### ¿Qué es una arquitectura de microservicios?

Como ya se ha ejemplificado anteriormente, las topologías hacen referencia a la estructura de cada arquitectura. En el caso de los microservicios, tenemos a los clientes que harán uso de nuestro software. Ellos se comunican mediante una API (regularmente se le llama API gateway, haciendo referencia a los routers en redes). Esta API nos ayuda a generar las peticiones de los clientes a los servicios. Se les llama microservicios porque encapsulan un solo caso de negocio o dominio del problema. Como condición de esta arquitectura, cada servicio debe ser completamente independiente de la estructura y programación de los demás servicios. A diferencia de la arquitectura orientada a servicios, estos servicios no comparten librerías, almacenamiento de datos y están desacoplados entre sí.

![alt text](/assets/img/arq-014-1.png){: width="700" }

Al momento, es una de las más populares porque ofrece un mayor índice de trabajo colaborativo; es decir, múltiples equipos de desarrollo pueden trabajar dentro del proyecto sin muchas complicaciones. Además de esto, es muy escalable, resiliente y de fácil evolución. Todo esto suena bien al momento de seleccionar este estilo de arquitectura, pero, aunque es versátil, su implementación es costosa, ya que se requieren equipos grandes durante su desarrollo.

### ¿Cuándo debemos usarlas y cuando no?
#### Cuando usarla

- **Cuando el dominio cambie muy rápido:** es ideal en entornos donde los requisitos del negocio o del dominio cambian rápidamente. Esto se debe a que cada microservicio es independiente y puede adaptarse o modificarse sin afectar a otros servicios. De forma que puedes ajustar o actualizar solo una parte del sistema sin tener que rehacer toda la arquitectura.
- **Cuando la tolerancia a fallos sea muy importante:** si es necesario que el sistema sea tolerante a fallos, los microservicios son una opción robusta. Al estar desacoplados, el fallo de un servicio no necesariamente compromete el funcionamiento de todo el sistema. Cada servicio puede aislarse y gestionarse de manera independiente, lo que mejora la resiliencia general.
- **Cuando la modularidad sea muy importante: l**a arquitectura de microservicios es altamente modular, ya que cada servicio representa un módulo que encapsula un caso de uso o dominio específico. Esto facilita el desarrollo, el mantenimiento y la organización del código, ya que los equipos pueden trabajar en servicios separados sin interferir con el trabajo y las funcionalidades de otros.
- **Cuando la reusabilidad sea muy importante:** Los microservicios permiten la reutilización de componentes en diferentes partes del sistema o incluso en otros proyectos. Al desarrollar servicios desacoplados, es más fácil reaprovechar su funcionalidad en otros contextos sin la necesidad de duplicar código o crear dependencias innecesarias.
- **Cuando quieras evolucionar partes independientes del software: si el** objetivo es poder evolucionar partes del sistema de manera independiente, los microservicios son una excelente opción. Puedes actualizar, mejorar o incluso reemplazar un microservicio sin afectar el resto del sistema o software, esto nos permite una evolución continua y rápida del sistema.

#### Cuando no usarla

- **Cuando los recursos sean escasos: l**os microservicios requieren una infraestructura más compleja, ya que cada servicio necesita su propio entorno de ejecución, monitoreo y administración. Si tenemos recursos limitados, tanto en términos de equipos de desarrollo como de infraestructura técnica (por ejemplo, servidores), puede no ser la mejor opción que podemos implementar.
- **Cuando quieras una arquitectura simple: s**i tu proyecto no tiene requisitos complejos y puede beneficiarse de una arquitectura simple, los microservicios pueden añadir una capa innecesaria de complejidad. Para proyectos pequeños o medianos, una arquitectura monolítica es generalmente más fácil de gestionar y menos costosa de implementar.
- **Cuando el rendimiento sea muy importante: a**unque los microservicios ofrecen ventajas en cuanto a escalabilidad y resiliencia, también pueden generar sobrecarga cuando nos referimos a latencia y comunicación. Si el rendimiento extremo es crucial para el sistema, una arquitectura monolítica, que evita las llamadas constantes entre servicios, puede ser más eficiente.

![alt text](/assets/img/arq-014-2.png){: width="900" }


