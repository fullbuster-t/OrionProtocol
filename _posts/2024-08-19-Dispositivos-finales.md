---
layout: post
title: "Dispositivos finales"
date: 2024-08-19 06:07:00 -0600
categories: [Redes]
tags: [CCNA]
description: Los "dispositivos finales" o "hosts" son aquellos con los que las personas tienen mayor contacto y utilizan con más frecuencia. Constituyen la interfaz entre los usuarios y la comunicación en la red.....
img: /assets/img/net-009.webp
---

---

## ¿Qué son los dispositivos finales?
Los "dispositivos finales" o "hosts" son aquellos con los que las personas tienen mayor contacto y utilizan con más frecuencia. Constituyen la interfaz entre los usuarios y la comunicación en la red.

Ejemplos comunes de dispositivos finales:
- Computadoras: estaciones de trabajo, portátiles, servidores (de archivos, web, etc.)
- Impresoras de red
- Teléfonos y equipos de teleconferencias
- Cámaras de seguridad
- Dispositivos móviles: teléfonos celulares, tablets, lectores de tarjetas de crédito y débito, escáneres de códigos de barras

Estos dispositivos son el origen o el destino de los mensajes que viajan a través de la red, como se muestra en las imágenes. Para enviar estos mensajes, es fundamental tener una referencia de quién los envía y quién los recibe. Para ello, los hosts se identifican mediante direcciones. Cuando un host inicia la comunicación, utiliza la dirección del host de destino para determinar a dónde debe ser enviado el mensaje.

![alt text](/assets/img/net-009-1.webp){: width="600" }

![alt text](/assets/img/net-009-2.webp){: width="600" }

![alt text](/assets/img/net-009-3.webp){: width="600" }

## Tipos de direcciones utilizadas por los hosts
Para que la comunicación sea posible, cada dispositivo final se identifica mediante dos tipos de direcciones principales:

* **Dirección física (MAC Address):** es una dirección única grabada en el hardware de la tarjeta de interfaz de red (NIC) de cada dispositivo. Se utiliza para identificar un dispositivo dentro de una red local (LAN). 
* **Dirección lógica (IP Address):** es una dirección que se asigna lógicamente y que permite a los dispositivos comunicarse a través de diferentes redes, incluyendo internet. Es como un dirección postal que permite enviar una carta a cualquier parte del mundo. 

## El papel de los dispositivos intermediarios en la red
Aunque los dispositivos finales son los puntos de origen y destino dentro de una red, no pueden comunicarse directamente entre sí. Para lograr la comunicación, la red se apoya en dispositivos intermediarios. Estos dispositivos interconectan hosts individuales y pueden conectar múltiples redes para formar una interconexión más grande. De esta forma, controlan el flujo de los datos y los dirigen a su destino. Los dispositivos intermediarios más comunes incluyen:

- **Switches:** Se utilizan en redes LAN principalmente para conectar dispositivos finales dentro de la misma red.
- **Routers:** Conectan diferentes redes y dirigen el tráfico entre ellas. Utilizan las direcciones IP para generar rutas eficientes y enviar los mensajes a su destino.
- **Puntos de acceso:** Permiten la conexión de los dispositivos de forma inalámbrica.
- **Firewalls:** Son dispositivos de seguridad que monitorean y controlan el tráfico de red entrante y saliente, protegiendo a los hosts de accesos no autorizados.