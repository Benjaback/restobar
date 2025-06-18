
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  if (!calendarEl) return; 

  const calendar = new FullCalendar.Calendar(calendarEl, {
    locales: FullCalendar.globalLocales, 
    locale: 'es', // español
    allDayText: 'Turnos',
    dayHeaderFormat: { weekday: 'short' },
    themeSystem: 'bootstrap5',
    
    selectable: true,


    slotMinTime: "10:00:00",       
    slotMaxTime: "21:00:00",      
    slotDuration: "01:00:00",   
    initialView: 'dayGridMonth',
    slotLabelFormat: {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
},

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    },
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Horarios',
      day: 'Día'
    },
    dateClick: function (info) {
      const fechaInput = document.getElementById('fechaSeleccionada');
      if (fechaInput) {
        //fechaInput.value = info.dateStr;
      }
     
      const calendarWrapper = document.getElementById('calendar');

       
        calendarWrapper.classList.remove('fc-transicion-activa');
        calendarWrapper.classList.add('fc-transicion');

        
        setTimeout(() => {
          calendar.changeView('timeGridWeek', info.date);

          requestAnimationFrame(() => {
            calendarWrapper.classList.add('fc-transicion-activa');
          });
        }, 100);

      const formulario = document.getElementById('formularioMascota');
      if (formulario) {
        formulario.classList.remove('d-none'); 
      }
      mostrarMensaje(`📅 Fecha seleccionada: ${info.dateStr}`);
    },

    select: function(info) {
      const fechaInput = document.getElementById('fechaSeleccionada');
      const horaInput = document.getElementById('horaSeleccionada');

      const fecha = info.startStr.slice(0, 10);   
      const hora = info.startStr.slice(11, 16);   

      if (fechaInput) fechaInput.value = fecha;
      if (horaInput) horaInput.value = hora;

      mostrarMensaje(`Turno: ${fecha} a las ${hora}`);
    }
  });




  

  calendar.render();
});

function mostrarMensaje(texto) {
  const cartel = document.createElement('div');
  cartel.className = 'mensaje-flotante';
  cartel.textContent = texto;

  document.body.appendChild(cartel);

  setTimeout(() => {
    cartel.classList.add('visible');
  }, 100); 

  setTimeout(() => {
    cartel.classList.remove('visible');
    setTimeout(() => cartel.remove(), 500); 
  }, 3000);
}


function mostrarCartelGuardado(texto) {
  const cartel = document.createElement('div');
  cartel.className = 'mensaje-guardado';
  cartel.innerHTML = texto;

  document.body.appendChild(cartel);

  setTimeout(() => cartel.classList.add('visible'), 50);
  setTimeout(() => {
    cartel.classList.remove('visible');
    setTimeout(() => cartel.remove(), 500);
  }, 1500); 
}

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formularioTurno'); 

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault(); 

      const fecha = document.getElementById('fechaSeleccionada')?.value || 'sin fecha';
      const hora = document.getElementById('horaSeleccionada')?.value || 'sin hora';

      mostrarCartelGuardado(`✅ Turno guardado: <strong>${fecha}</strong> a las <strong>${hora}</strong>`);

      
      setTimeout(() => {
        location.reload();
      }, 2000);
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
    $('.selectpicker').selectpicker(); 
  });