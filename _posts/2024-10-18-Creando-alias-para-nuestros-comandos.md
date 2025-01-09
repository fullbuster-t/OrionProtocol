---
layout: post
title: "Creando alias para nuestros comandos"
date: 2024-10-18 11:37:00 -0600
categories: [Git y GitHub]
tags: [Git]
description: Al usar Git, solemos escribir y ejecutar muchos comandos, ya sea en VSCode o en la consola.....
img: /assets/img/git-011.png
---

---

Al usar Git, solemos escribir y ejecutar muchos comandos, ya sea en VSCode o en la consola. Como hemos visto, estos comandos pueden ser bastante largos y tediosos de escribir.

Además, no debemos olvidar que muchos de los comandos de Git pueden incluir modificadores, que nos permiten controlar qué información nos mostrará Git al ejecutar el comando.

Un ejemplo de ello

**git status --short**
![alt text](/assets/img/git-011-1.png){: width="700" }

Es la versión abreviada del comando git status, que solo muestra los archivos sobre los que se ha realizado algún cambio.

Este comando puede ayudarnos a ahorrar tiempo al inspeccionar los cambios; sin embargo, ese tiempo se pierde al escribir un comando tan largo. Aquí es donde los **alias** tienen una gran ventaja, ya que permiten resumir comandos largos de Git con una sintaxis más corta.

### ¿Cómo creo mi propio alias?
**git config --global alias.s "status --short"**

La forma de definir un alias es utilizando git config —global, seguido de alias. Después del punto (.), debemos escribir la abreviatura que usaremos para el comando de Git, y por último, especificamos el comando al que queremos asociarlo.

![alt text](/assets/img/git-011-2.png){: width="700" }

Como podemos observar, este alias simplifica enormemente la sintaxis del comando git status, lo que nos ayudará a ahorrar mucho tiempo al trabajar con Git.

Ahora bien, esto lo podemos hacer con todos los comandos de Git, y a continuación veremos algunos de ellos.

Otro comando que suele ser muy utilizado es el siguiente

**git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"**

Este comando hace referencia a un git log con diferentes modificadores. Como podemos ver, este comando nos ayudará a crear un alias que, de otro modo, tendríamos que escribir con toda su sintaxis, lo que nos quitaría mucho tiempo durante el desarrollo.  

