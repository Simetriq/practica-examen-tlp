# practica-examen-tlp

⏰ PLAN DE TRABAJO DETALLADO (3 HORAS)

HORA 1: Configuración y Modelos
0-10 min: Estructura de carpetas y package.json

10-25 min: Conexión MongoDB y modelos básicos

25-40 min: Relaciones entre modelos (embebidas y referenciadas)

40-60 min: Configuración Express y middlewares básicos

HORA 2: Autenticación y CRUD Básico

60-75 min: JWT helper y bcrypt helper

75-90 min: Controladores de auth (register, login)

90-105 min: Middleware de autenticación

105-120min: CRUD básico de articles

HORA 3: Relaciones y Eliminaciones
120-135min: CRUD de comments con relaciones

135-150min: Eliminación lógica en User

150-165min: Eliminación en cascada Article→Comments

165-180min: Validaciones express-validator y testing

🎯 PUNTOS CLAVE QUE SÍ VAN A EVALUAR:

✅ OBLIGATORIOS:

Relación 1:1 embebida (User.profile)

Relación 1:N referenciada (User→Article, Article→Comment)

Eliminación lógica (User con deletedAt)

Eliminación en cascada (Article→Comments)

JWT con cookies httpOnly

Manejo de errores con try-catch

Validaciones con express-validator

❌ OPCIONALES (si da tiempo):
Roles de usuario (admin/user)

populate reverso

Validaciones más complejas

📝 EJERCICIO PRÁCTICO - SIMULACRO

Te propongo que empecemos con este ejercicio paso a paso:

Ejercicio 1 (45 min):
"Configura los modelos User, Article, Comment con todas las relaciones"

Ejercicio 2 (45 min):
"Implementa JWT authentication con eliminación lógica en User"

Ejercicio 3 (45 min):
"CRUD completo de Articles con eliminación en cascada de Comments"

Ejercicio 4 (45 min):
"Validaciones con express-validator y populate de relaciones"


====================================================================================================================================================================================================================================================

Modelos a realizar:

TEMA: Sistema de Gestión de Proyectos Personales

MODELO 1: User (Usuario)

Relación 1:1 Embebida:

Campo: userSettings (objeto embebido)

theme: string enum ['light', 'dark', 'auto']

notifications: boolean

language: string enum ['es', 'en']

timezone: string

Eliminación Lógica:

Campo: deletedAt (Date)

Campos principales:

username (string, único, requerido)

email (string, único, requerido)

password (string, requerido)

role (string enum: ['user', 'project_manager', 'admin'])

MODELO 2: Project (Proyecto)
Relación 1:N Referenciada:

Campo: owner (ObjectId, referencia a User)

Campo: teamMembers (array de ObjectIds, referencia a User)

Campos principales:

title (string, requerido)

description (string)

status (string enum: ['planning', 'in_progress', 'completed', 'cancelled'])

deadline (Date)

priority (string enum: ['low', 'medium', 'high'])

MODELO 3: Task (Tarea)
Relación 1:N Referenciada:

Campo: project (ObjectId, referencia a Project)

Campo: assignedTo (ObjectId, referencia a User)

Relación N:M Referenciada:

Campo: dependencies (array de ObjectIds, referencia a Task)

Campos principales:

title (string, requerido)

description (string)

status (string enum: ['todo', 'in_progress', 'review', 'done'])

dueDate (Date)

estimatedHours (Number)

🎯 REQUISITOS TÉCNICOS:

Para User:

✅ Relación 1:1 embebida: userSettings

✅ Eliminación lógica: deletedAt

✅ Método: softDelete()

✅ Middleware: excluir usuarios eliminados en consultas

✅ Método: comparePassword()

Para Project:

✅ Relación 1:N: owner → User

✅ Relación N:M: teamMembers → [User]

Para Task:

✅ Relación 1:N: project → Project

✅ Relación 1:N: assignedTo → User

✅ Relación N:M: dependencies → [Task]