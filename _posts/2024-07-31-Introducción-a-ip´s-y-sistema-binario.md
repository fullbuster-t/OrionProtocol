---
layout: post
title: "Introducción a ip´s y sistema binario"
date: 2024-07-31 20:36:00 -0600
categories: [Redes]
tags: [CCNA]
description: Para que un router pueda determinar desde dónde y hacia dónde enviar la información, es necesario identificar de forma única a cada dispositivo en la red.....
img: /assets/img/net-008.webp
---

--- 

### Direcciones ip

Para que un router pueda determinar desde dónde y hacia dónde enviar la información, es necesario identificar de forma única a cada dispositivo en la red. Es aquí donde entran en juego las direcciones IP, que permiten diferenciar los dispositivos entre sí.

### Octetos en IPv4 

Una dirección IPv4 se compone de cuatro partes llamadas octetos. Cada octeto representa un valor entre 0 y 255. Los tres primeros octetos indican la red a la que pertenece la dirección, mientras que el último octeto identifica de manera única a cada dispositivo dentro de esa red.

![alt text](/assets/img/net-008-1.webp){: width="200" }


**Datos a tener en cuenta.**

* Tipos de direcciones IP: Existen dos tipos principales: públicas y privadas. Las direcciones públicas son visibles en Internet, mientras que las privadas se utilizan dentro de redes locales.

* Versiones de IP: Actualmente, usamos dos versiones de direcciones IP: IPv4 (la más común hoy en día) y IPv6 (creada para reemplazar a IPv4 debido a la escasez de direcciones).

* Rango de un byte: Un byte puede representar un valor entre 0 y 255, lo que en binario equivale a valores entre 00000000 y 11111111.

* Octetos y sistema binario: Cada dirección IPv4 está compuesta por octetos, que son bloques de 8 bits. Cada bit tiene un valor específico asignado, lo que permite representar números en formato binario

![alt text](/assets/img/net-008-2.webp){: width="600" }