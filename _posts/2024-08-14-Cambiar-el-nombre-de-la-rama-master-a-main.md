---
layout: post
title: "Cambiar el nombre de la rama master a main"
date: 2024-08-14 09:20:00 -0600
categories: [Git y GitHub]
tags: [Git]
description: Dentro de Git existe el concepto de ramas. Este concepto hace referencia a un lugar en el que se puede estar trabajando; en este caso, un repositorio puede tener varias ramas.....
img: /assets/img/git-006.png
---

---

Dentro de Git existe el concepto de ramas. Este concepto hace referencia a un lugar en el que se puede estar trabajando; en este caso, un repositorio puede tener varias ramas.

Es recomendable trabajar en ramas diferentes a la rama main o master, ya que esta suele estar destinada a conservar los cambios que realmente queremos mantener dentro de nuestro proyecto.

**git branch**  
Este comando ayuda a localizar sobre qué rama estamos trabajando dentro de nuestro repositorio.

![alt text](/assets/img/git-006-1.png){: width="700" }

Ahora bien, para cambiar el nombre de la rama master podemos hacer uso del siguiente comando:

**git branch -m master main**  
Aquí cambiamos el nombre de la rama principal master a main para su uso más adelante.

![alt text](/assets/img/git-006-2.png){: width="700" }

El cambio de nombre que hicimos hace un momento no es algo que esté impactando de manera global, sino que solo se limita al repositorio sobre el cual estemos trabajando en ese momento. Puede que, si nosotros descargamos un repositorio de internet, este ya contenga la rama como main, aunque en algunos casos no será así. Es por ello que, para configurar este nombre de manera global, usamos:

**git config --global init.defaultBranch main**  
Con este comando indicamos que cada vez que inicializamos Git en un repositorio, la rama principal llevará por defecto el nombre de main, en lugar de master como se usaba anteriormente. Esto ayuda a estandarizar la nomenclatura globalmente en todos los repositorios en los que trabajemos.

![alt text](/assets/img/git-006-3.png){: width="700" }  

![alt text](/assets/img/git-006-4.png){: width="400" }