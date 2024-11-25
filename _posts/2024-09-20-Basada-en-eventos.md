---
layout: post
title: "Basada en eventos (EDA)"
date: 2024-09-20 06:07:00 -0600
categories: [Desarrollo de software]
tags: [Fundamentos de arquitectura de software]
description: En este estilo de arquitectura, principalmente se utilizan eventos para desacoplar y desencadenar la comunicación entre los distintos servicios y/o componentes del sistema.....
img: /assets/img/arq-012.png
---

---

### ¿Qué es la arquitectura basada en eventos?
En este estilo de arquitectura, principalmente se utilizan eventos para desacoplar y desencadenar la comunicación entre los distintos servicios y/o componentes del sistema.

Aquí entendemos los eventos como un cambio en el estado del sistema o una actualización de sí mismo. Al tener esta arquitectura, podemos considerarla como un sistema aislado o combinarla con otros estilos de arquitectura.

La arquitectura basada en eventos se basa en el cambio de eventos; tenemos una comunicación que se establece de manera asíncrona, desencadenando flujos de trabajo.

En este estilo de arquitectura, existen dos topologías:

![alt text](/assets/img/arq-012-1.png){: width="600" }

* Broker: es una topología en la cual se desencadenan los eventos de manera secuencial. Esto nos permite tener un alto nivel de sensibilidad dentro del sistema, manteniendo un buen rendimiento.
* Mediador: existe una figura central en la cual todos los eventos se comunican y se desencadena un flujo de trabajo.

![alt text](/assets/img/arq-012-2.png){: width="700" }

La topología broker se basa en un flujo donde los procesadores de eventos desencadenan un flujo de manera continua. Es muy útil cuando se tiene un flujo de procesamiento simple y no es necesaria la orquestación.

En ella encontramos distintos componentes:

* Productor del evento: genera un evento inicial, que se manda a través de la cola de mensajes mediante un broker que lo envía a un procesador de eventos.

* Procesador de eventos: cuando el procesador de eventos recibe el evento, desencadena un flujo de trabajo interno que, a su vez, inicia un flujo de procesamiento. El evento se añade a una cola que se puede procesar o desencadenar a través de distintos procesadores de eventos, generando diversas funcionalidades.

Debemos tener en cuenta que dentro de esta topología, los eventos pueden desencadenar uno o más procesos de manera simultánea.

Ventajas:
* Desacoplamiento: Tiene un alto índice de desacoplamiento.
* Escalabilidad: Es posible escalar cada uno de los componentes de manera individual.
* Rendimiento: Se logra un buen rendimiento debido a que el flujo no tiene intermediarios, lo que permite aprovechar el poder de procesamiento de cada uno de los procesos, productores y brokers.
* Extensibilidad: Esta topología puede expandir sus funcionalidades debido a la capacidad de generar más de un proceso por evento.

Desventajas:
* Dentro de esta topología, no se tiene control sobre el flujo, lo que dificulta la detección de errores o pérdidas de información. Por ello, el manejo de errores es complicado en esta topología.

![alt text](/assets/img/arq-012-3.png){: width="700" }

En esta topología se tiene al mediador como principal componente, y se encarga de manejar, controlar el flujo de trabajo y de iniciar los eventos que requieren coordinación dentro de los canales de eventos, para ser recibidos por los procesadores de eventos que necesiten procesar.

Es decir, lo que tenemos es: un productor de eventos, el cual genera un evento inicial que se añade a una cola de mensajes; esta cola es monitoreada por el mediador, y dependiendo del evento inicial, coordina y orquesta los distintos canales a los cuales tiene que distribuir los eventos procesados, que a su vez son procesados por los procesadores de eventos. Cuando los procesadores de eventos terminan su trabajo, notifican al mediador de los procesos realizados.

De tal forma que podemos monitorear todo el flujo de trabajo.

Ventajas:
* Control del flujo: ya que el mediador está monitoreando y conoce el flujo de trabajo al realizar.
* Manejo de errores: se puede implementar un mejor manejo de los errores.
* Recuperabilidad: esto debido al monitoreo constante del flujo de trabajo.
*Consistencia de los datos: al estar monitoreando de manera constante el flujo de trabajo, podemos notar cómo se mueve la información dentro de los procesos.

Desventajas:
* Acoplamiento entre procesadores.
* Menor escalabilidad.
* Menor tolerancia a fallos.

¿Qué pasa si nosotros queremos comunicación síncrona en nuestro sistema?

Lo que podemos hacer es la implementación de una comunicación pseudosíncrona a través de “Request-Reply”.

![alt text](/assets/img/arq-012-4.png){: width="600" }

En este modelo tenemos un productor de eventos y un consumidor de eventos. En el proceso de estos eventos, tenemos la siguiente serie de pasos:

* Primero se genera un mensaje.
* Después de que se crea el mensaje, ocurren dos cosas en simultáneo: el mensaje se pone en una cola de mensajes y, por otro lado, el productor de mensajes se pone en espera del mensaje.
* Luego se recibe el mensaje a través del consumidor de eventos, que lo procesa, trabaja con él y genera un nuevo mensaje de respuesta.
* Se agrega el nuevo mensaje a una cola de mensajes.
* Y por último, el productor de eventos acepta la cola de eventos, la recibe y la procesa.

Cuándo usarla y cuándo no:

![alt text](/assets/img/arq-012-5.png){: width="600" }

