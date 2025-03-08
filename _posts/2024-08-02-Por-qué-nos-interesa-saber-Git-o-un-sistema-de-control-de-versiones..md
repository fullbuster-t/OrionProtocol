---
layout: post
title: "Por qué nos interesa saber Git o un sistema de control de versiones"
date: 2024-08-02 08:50:00 -0600
categories: [Git y GitHub]
tags: [Git]
description: Cuando se tiene un control de versiones, hacemos uso de una especie de máquina del tiempo, ya que, mediante ella, podremos viajar a distintas temporalidades dentro de un proyecto de programación.....
img: /assets/img/git-001.webp
---

--- 

Cuando se tiene un control de versiones, hacemos uso de una especie de máquina del tiempo, ya que, mediante esta herramienta, podemos "viajar" a distintas temporalidades dentro de un proyecto de programación.

En Git, a los proyectos se les suele llamar repositorios. Dentro de este concepto, existen diferentes tipos:

*Repositorio central: hace referencia a un servidor que contiene todos los archivos o ficheros del proyecto. Usualmente, no existen copias o respaldos de este proyecto y su contenido, lo que dificulta su uso cuando varios desarrolladores trabajan en él simultáneamente.*

*Repositorio distribuido: este tipo de repositorio se enfoca en asignar a cada desarrollador una copia del proyecto, sobre la cual podrán realizar modificaciones. A su vez, en caso de pérdida de estos ficheros, se asegura que otro desarrollador tenga una copia del proyecto para sustituir la pérdida.*

### ¿Cómo funciona Git?

Su funcionamiento se puede ejemplificar como una toma de capturas de nuestro código en cada modificación, generando así un historial de los cambios realizados durante el periodo de vida del proyecto.

>Para el desarrollo de las siguientes prácticas, utilizaremos el software Git. Podemos descargarlo en el siguiente enlace:  
><a href="https://git-scm.com/downloads" target="_blank"><strong>Descarga git</strong></a>  
>Aquí podrás seleccionar la descarga de acuerdo con tu sistema operativo. En el caso de Linux, Git ya viene instalado por defecto. Para Windows, la instalación de Git es sencilla: solo debes hacer clic en "Next" repetidamente, ya que no se necesitan configuraciones personalizadas.  
