<?php
/**
 * ============================================================
 *  EMSO — ENVÍO DE FORMULARIO DE COTIZACIÓN
 *  Recibe el formulario de index.html (form#quoteForm) y lo
 *  envía por correo usando la función mail() de PHP (Hostinger).
 *
 *  CONFIGURACIÓN: solo necesitas revisar las 2 líneas marcadas
 *  con ⭐ más abajo. No requiere librerías externas.
 * ============================================================
 */

header('Content-Type: application/json; charset=utf-8');

// ─── CONFIGURACIÓN ────────────────────────────────────────
$destinatario = "contacto@emsocs.com";      // ⭐ Correo donde llegan las cotizaciones
$remitente    = "no-reply@emsocs.com";      // ⭐ Debe ser un correo @emsocs.com (mismo dominio del hosting)
$nombreSitio  = "EMSO, Consultoría y Soluciones";

// ─── SOLO ACEPTAR POST ────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido.']);
    exit;
}

// ─── ANTI-SPAM: HONEYPOT ──────────────────────────────────
// Si el campo oculto "website" viene lleno, es un bot.
if (!empty($_POST['website'])) {
    // Respondemos éxito falso para no delatar el honeypot al bot.
    echo json_encode(['success' => true]);
    exit;
}

// ─── FUNCIÓN DE LIMPIEZA ──────────────────────────────────
function limpiar($valor) {
    $valor = trim($valor ?? '');
    $valor = str_replace(["\r", "\n"], '', $valor); // evita inyección de cabeceras
    return htmlspecialchars($valor, ENT_QUOTES, 'UTF-8');
}

// ─── RECOLECTAR Y VALIDAR CAMPOS ──────────────────────────
$nombre   = limpiar($_POST['nombre']   ?? '');
$empresa  = limpiar($_POST['empresa']  ?? '');
$telefono = limpiar($_POST['telefono'] ?? '');
$correo   = trim($_POST['correo'] ?? '');
$servicio = limpiar($_POST['servicio'] ?? '');
$mensaje  = trim($_POST['mensaje'] ?? '');

$errores = [];
if ($nombre === '')                                   $errores[] = 'El nombre es obligatorio.';
if ($telefono === '')                                 $errores[] = 'El teléfono es obligatorio.';
if ($correo === '' || !filter_var($correo, FILTER_VALIDATE_EMAIL)) $errores[] = 'El correo electrónico no es válido.';
if ($servicio === '')                                 $errores[] = 'Selecciona un tipo de servicio.';
if (trim($mensaje) === '')                             $errores[] = 'El mensaje es obligatorio.';

if (!empty($errores)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(' ', $errores)]);
    exit;
}

// Mensaje: permitir saltos de línea pero limpiar etiquetas HTML
$mensajeLimpio = htmlspecialchars(strip_tags($mensaje), ENT_QUOTES, 'UTF-8');
$correoLimpio  = htmlspecialchars($correo, ENT_QUOTES, 'UTF-8');

// ─── CONSTRUIR CORREO ─────────────────────────────────────
$asunto = "Nueva solicitud de cotización — $nombre";

$cuerpo  = "Has recibido una nueva solicitud de cotización desde la página web de $nombreSitio:\n\n";
$cuerpo .= "Nombre:    $nombre\n";
$cuerpo .= "Empresa:   " . ($empresa !== '' ? $empresa : '—') . "\n";
$cuerpo .= "Teléfono:  $telefono\n";
$cuerpo .= "Correo:    $correoLimpio\n";
$cuerpo .= "Servicio:  $servicio\n";
$cuerpo .= "\nMensaje:\n$mensajeLimpio\n";
$cuerpo .= "\n---\nEnviado desde el formulario de cotización de emsocs.com\n";

$cabeceras   = [];
$cabeceras[] = "From: $nombreSitio <$remitente>";
$cabeceras[] = "Reply-To: $nombre <$correoLimpio>";
$cabeceras[] = "MIME-Version: 1.0";
$cabeceras[] = "Content-Type: text/plain; charset=UTF-8";

// ─── ENVIAR ────────────────────────────────────────────────
$enviado = @mail($destinatario, $asunto, $cuerpo, implode("\r\n", $cabeceras));

if ($enviado) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'No se pudo enviar el correo. Intenta de nuevo o contáctanos directamente.']);
}
