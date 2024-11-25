---
layout: post
title: "Evolución de la arquitectura"
date: 2024-10-11 06:07:00 -0600
categories: [Desarrollo de software]
tags: [Fundamentos de arquitectura de software]
description: La arquitectura, al igual que el software, debe mantenerse en constante evolución y adaptarse a lo largo del tiempo.....
img: /assets/img/arq-021.png
---

---

### Estrategias de evolución y mantenimiento de una arquitectura

La arquitectura, al igual que el software, debe mantenerse en constante evolución y adaptarse a lo largo del tiempo. Una arquitectura evolutiva soporta cambios incrementales y dirigidos a diferentes aspectos del software. Una de las formas de evolucionar una arquitectura, como ya hemos mencionado, es a través de la documentación. La documentación es crucial para poder hacer evolucionar una arquitectura, ya que ayuda a evitar errores o a no deshacer partes del software que ya están implementadas y funcionan correctamente. Por lo tanto, el primer paso para tener una arquitectura evolutiva es contar con una buena documentación.

Las revisiones periódicas son muy comunes dentro del proceso de evolución, ya que permiten rehacer componentes sin cambiar su funcionalidad. A esto se le llama refactorización, donde partes del sistema se modifican para mejorar su construcción o funcionalidad.

Otra forma de lograr la evolución en el software es a través de **fitness functions**, que nos permiten realizar pruebas de funcionalidad dentro del software.

![alt text](/assets/img/arq-021-1.png){: width="750" }

### Otras estrategias de evolución

- **Modularización y desacoplamiento:** se enfoca en el proceso de estructuración del sistema en componentes y módulos con interfaces claras. Cada módulo tiene una responsabilidad definida, lo que facilita hacer cambios en el sistema sin afectar a otros módulos.
- **Patrones de diseño evolutivos:** se basa en la aplicación de patrones que faciliten el crecimiento y los cambios en la arquitectura, como las arquitecturas basadas en eventos (*event-driven architectures*) y la tolerancia a fallos.
- **Refactorización continua:** aquí se mejora el código sin cambiar el comportamiento que tiene dentro del software. A nivel de arquitectura, significa hacer ajustes en la estructura del sistema para hacerlo más eficiente.
- **Versionado y migración de datos:** se enfoca en las estructuras de datos que maneja nuestro sistema, ya que al igual que el software, los datos también evolucionan.



