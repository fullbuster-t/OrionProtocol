---
layout: post
title: "Orientada a servicios (SOA)"
date: 2024-09-23 06:07:00 -0600
categories: [Desarrollo de software]
tags: [Fundamentos de arquitectura de software]
description: Utiliza componentes de software llamados servicios (se pueden pensar como componentes o pedazos de código que nos sirven para desarrollar funcionalidades).....
img: /assets/img/arq-013.png
---

---

### ¿Qué es una arquitectura orientada a servicios?
Utiliza componentes de software llamados servicios (se pueden pensar como componentes o pedazos de código que nos sirven para desarrollar funcionalidades). Aquí mostraremos la topología correspondiente a este servicio.

![alt text](/assets/img/arq-013-1.png){: width="500" }

Esta arquitectura está distribuida en distintos componentes. Tenemos la interfaz del usuario, donde interactúa con el usuario y, a su vez, se comunica con los distintos servicios que necesite invocar durante la interacción. La segunda parte la conforman los servicios, que tienen un desarrollo separado, lo cual los hace independientes; se comunican con la base de datos para la lectura y escritura de los datos.

Es pragmática, ya que si necesitamos agregar una funcionalidad al sistema, lo que se debe hacer es crear un nuevo servicio sin modificar los que ya existen.

Esta topología tiene distintas variantes.

![alt text](/assets/img/arq-013-2.png){: width="650" }

En la primera variante, tenemos añadida una capa de comunicación (en este caso, una API) que separa las responsabilidades de comunicación desde la interfaz del usuario. Al separarlo con una nueva capa, tenemos más control sobre el flujo. Aquí se llaman a los servicios a través de la API, que tiene las responsabilidades de cambio en las bases de datos. Al separarlo, podemos implementar un rate limiter para minimizar los riesgos de ataques cibernéticos.

![alt text](/assets/img/arq-013-3.png){: width="650" }

La segunda variante tiene una separación de la interfaz mediante el dominio. Aquí se hace énfasis en las funcionalidades de acuerdo a los roles de usuario, y también se establece una distinción entre los servicios que se conectan en estas interfaces.

![alt text](/assets/img/arq-013-4.png){: width="650" }

La última variante nos habla de una separación granular por servicios y dominios. Podemos notar que el servicio 4 necesita una separación de la base de datos por el mecanismo que maneja. Esto es muy importante, ya que no siempre tendremos una base de datos monolítica; en cambio, tendremos distintas bases de datos, lo que nos ayuda con el control de duplicidad de datos o bases de datos demasiado complejas.

Una vez que comprendemos estas topologías, también debemos entender el concepto de granularidad de servicios. La granularidad de servicios hace referencia al tamaño de los servicios que existen dentro de un software.

![alt text](/assets/img/arq-013-5.png){: width="600" }

Tenemos dos opciones de diseño: por capas y por dominio.

* Capas: cada servicio tiene una capa de comunicación (API), una capa de negocio (que cumple con la lógica) y una capa de persistencia (que se encarga del manejo de la base de datos).
* Dominio: se tiene la misma capa de comunicación (API), y dentro de ella se encuentran distintos componentes a nivel de servicio (que pueden ser módulos).

Ahora bien, si tenemos múltiples servicios, el flujo de peticiones que se genera hacia la base de datos puede corromperla, generando problemas en el sistema. Para solventar este problema, contamos con la federación de librerías (que es la integración de librerías mediante el trabajo colaborativo de las mismas; estas son integradas en los servicios que las requieran) y la partición en la base de datos (similar a la partición de discos en Windows; la partición de bases de datos busca dividir los datos en fragmentos más pequeños que se distribuyen en diferentes tablas o servidores).

![alt text](/assets/img/arq-013-6.png){: width="600" }

¿Cuándo debemos usarla y cuando no?

![alt text](/assets/img/arq-013-7.png){: width="650" }

