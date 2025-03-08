---
layout: post
title: "Cómo moverse en cisco IOS"
date: 2024-08-21 06:21:00 -0600
categories: [Redes]
tags: [CCNA]
description: Dentro del software de Cisco, podemos hacer uso de diversos dispositivos como routers, switches, laptops, etc.....
img: /assets/img/net-010.webp
---

---

Dentro del software de Cisco, podemos hacer uso de diversos dispositivos como routers, switches, laptops, etc.

Ahora bien, todos tienen sus diversas configuraciones; en este caso, mostraremos comandos para los routers:

— **enable:**  Este comando nos ayuda a entrar en las opciones con privilegios que posee el dispositivo que estemos configurando.

![alt text](/assets/img/net-010-1.webp){: width="150" }

— **?:** DDepende de dónde se use este comando; nos muestra las configuraciones o comandos que podemos utilizar en ese menú.

![alt text](/assets/img/net-010-2.webp){: width="600" }

— **config terminal:** nos permite acceder a la configuración global del dispositivo.

![alt text](/assets/img/net-010-3.webp){: width="500" }

— **hostname [ Nombre para el dispositivo ]:** Este comando nos ayuda a poder asignarle un nombre al dispositivo.

![alt text](/assets/img/net-010-4.webp){: width="400" }

Para poder hacer configuraciones dentro de un dispositivo de red (en este caso, un router), podemos hacer uso de tres tipos de conexión. Para administrar esas conexiones, nosotros podemos ingresar a configurarlas; la primera es mediante...

— **line vty 0 15:** Con este comando, indicamos que queremos configurar las líneas que usan las terminales virtuales. Se utilizan para poder configurar un dispositivo de red de manera remota (SSH - Telnet).

Cuando accedemos a ellas, tenemos 16 sesiones que podemos configurar (de 0 a 15). Si queremos configurar las primeras 5, sería de line vty 0 4. Una sesión es una conexión que se establece entre una computadora y el dispositivo.

![alt text](/assets/img/net-010-5.webp){: width="400" }

También podemos verificar que comandos podemos usar para realizar configuraciones con el **?**

![alt text](/assets/img/net-010-6.webp){: width="600" }

— **line console 0:** Aquí indicamos la configuración de la línea de consola cuando nosotros nos conectamos de manera directa con un cable de una laptop al dispositivo. Aquí solo tenemos una sesión disponible porque solo podemos conectar un cable a la vez.

![alt text](/assets/img/net-010-7.webp){: width="600" }

Cuando nosotros queramos configurar alguno de los puertos que tenemos en el dispositivo, tendremos que especificar mediante el número del puerto.

— **interface g0/0/0**: Permite configurar los puertos de un dispositivo; en este caso, se configurará el puerto gigabyte 0/0/0.

![alt text](/assets/img/net-010-8.webp){: width="600" }

— **ip address 192.168.0.1 255.255.255.0:** Nos permite asignar una dirección IP al dispositivo; en este ejemplo, configuramos la interfaz gigabyte 0/0/0.

![alt text](/assets/img/net-010-9.webp){: width="450" }

![alt text](/assets/img/net-010-10.webp){: width="650" }

Como se puede observar ya ha sido asignada la ip a la interfaz del Router

— **end**: nos permite regresar a la raíz de la configuración privilegiada del dispositivo.

![alt text](/assets/img/net-010-11.webp){: width="550" }




