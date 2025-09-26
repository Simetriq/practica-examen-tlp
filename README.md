# practica-examen-tlp
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
