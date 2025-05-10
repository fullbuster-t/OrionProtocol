---
layout: post
title: "Métodos Comunes de Transmisión de Datos"
date: 2024-07-22 20:08:00 -0600
categories: [Redes]
tags: [CCNA]
description: Cuando los datos han sido transformados a códigos o series de bits, estos deben ser convertidos en señales que puedan ser enviadas a través de la red para llegar a su destino.....
img: /assets/img/net-004.webp
---

--- 

Cuando los datos han sido transformados a códigos o series de bits, estos deben ser convertidos en señales que puedan ser enviadas a través de la red para llegar a su destino. El concepto de medios de transmisión se refiere al medio por el cual son transmitidas estas señales. Medios habituales de transmisión son: cable de cobre, cable de fibra óptica y ondas electromagnéticas. Las señales, que están compuestas por patrones eléctricos u ópticos, son transmitidas de un dispositivo conectado a la red a otro. Estos patrones representan bits digitales y el recorrido desde el origen al destino como una serie de pulsos de electricidad, de pulsos de luz o de ondas de radio.

Antes de que los bits puedan viajar por la red, deben ser codificados en un formato que el medio de transmisión pueda transportar. Este proceso de codificación es realizado por la Tarjeta de Interfaz de Red (NIC) o un transceptor en el dispositivo de origen. La NIC convierte los patrones de bits digitales en señales físicas (pulsos eléctricos, pulsos de luz u ondas de radio) que pueden viajar a través del medio. En el destino, la NIC receptora realiza el proceso inverso: decodifica las señales físicas y las convierte de nuevo en bits para que el dispositivo de destino pueda interpretarlos. Este proceso fundamental ocurre en lo que se conoce como la Capa Física de las redes, tema que veremos más adelante.

Son usuales tres métodos de transmisión de señales en las redes:
* Señales eléctricas: Se transmiten representando los datos como pulsos eléctricos que viajan por los cables de cobre.
* Señales ópticas: La transmisión se realiza convirtiendo señales eléctricas en pulsos de luz.
* Señales inalámbricas: Se transmite por medio de ondas infrarrojas, de microondas o de radio a través del aire.

![alt text](/assets/img/net-004-1.webp){: width="400" }

En la mayoría de los hogares y las pequeñas empresas, las señales de red se transmiten a través de cables de cobre y por conexiones inalámbricas con capacidad Wi-Fi. En las redes más grandes se utilizan cables de fibra óptica para transportar señales de forma confiable a mayores distancias.