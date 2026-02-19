// ===============================
// PASO 1 - MODELADO DE DATOS
// ===============================

// ENUM DE LOS 17 ODS
enum ODS {
    FinDeLaPobreza = "ODS 1",
    HambreCero = "ODS 2",
    SaludYBienestar = "ODS 3",
    EducacionDeCalidad = "ODS 4",
    IgualdadDeGenero = "ODS 5",
    AguaLimpia = "ODS 6",
    EnergiaAsequible = "ODS 7",
    TrabajoDecente = "ODS 8",
    IndustriaEInnovacion = "ODS 9",
    ReduccionDesigualdades = "ODS 10",
    CiudadesSostenibles = "ODS 11",
    ProduccionResponsable = "ODS 12",
    AccionPorElClima = "ODS 13",
    VidaSubmarina = "ODS 14",
    VidaTerrestre = "ODS 15",
    PazYJusticia = "ODS 16",
    Alianzas = "ODS 17"
}

// TYPE PARA EL ESTADO
type EstadoProyecto = 'Planificado' | 'En Progreso' | 'Completado' | 'Auditado';

// INTERFAZ PRINCIPAL
interface IniciativaSostenible {
    id: number;
    nombre: string;
    odsPrincipal: ODS;
    presupuesto: number;
    estado: EstadoProyecto;
    toneladasCO2Ahorradas?: number; // Campo opcional
}

// ===============================
// PASO 2 - LÓGICA Y ARRAYS
// ===============================

const iniciativas: IniciativaSostenible[] = [
    {
        id: 1,
        nombre: "Paneles Solares en Sede Central",
        odsPrincipal: ODS.EnergiaAsequible,
        presupuesto: 50000,
        estado: 'En Progreso',
        toneladasCO2Ahorradas: 120
    },
    {
        id: 2,
        nombre: "Programa de Mentoring para Mujeres Tech",
        odsPrincipal: ODS.IgualdadDeGenero,
        presupuesto: 15000,
        estado: 'Completado'
    },
    {
        id: 3,
        nombre: "Flota de Vehículos Eléctricos",
        odsPrincipal: ODS.AccionPorElClima,
        presupuesto: 80000,
        estado: 'Planificado',
        toneladasCO2Ahorradas: 300
    }
];

// FUNCIÓN PARA FILTRAR PROYECTOS CLIMÁTICOS
function filtrarProyectosClimaticos(
    proyectos: IniciativaSostenible[]
): IniciativaSostenible[] {
    return proyectos.filter(
        p =>
            p.odsPrincipal === ODS.AccionPorElClima ||
            p.odsPrincipal === ODS.EnergiaAsequible
    );
}

const proyectosClima = filtrarProyectosClimaticos(iniciativas);
console.log("Proyectos Climáticos:", proyectosClima);

// CALCULAR PRESUPUESTO TOTAL
const presupuestoTotal = iniciativas.reduce(
    (acc, curr) => acc + curr.presupuesto,
    0
);

console.log("Presupuesto total invertido:", presupuestoTotal);

// CALCULAR TOTAL CO2 AHORRADO
const totalCO2 = iniciativas.reduce(
    (acc, curr) => acc + (curr.toneladasCO2Ahorradas || 0),
    0
);

console.log("Total de CO2 ahorrado:", totalCO2, "toneladas");

// ===============================
// PASO 3 - NIVEL AVANZADO
// ===============================

// TIPOS DE IMPACTO

interface ImpactoAmbiental {
    co2Reducido: number;
    aguaAhorrada: number;
}

interface ImpactoSocial {
    personasBeneficiadas: number;
    horasFormacion: number;
}

// INTERFAZ GENÉRICA

interface Proyecto<T> {
    nombre: string;
    impacto: T;
    ods: ODS;
    presupuesto: number;
}

// PROYECTO AMBIENTAL
const proyectoSolar: Proyecto<ImpactoAmbiental> = {
    nombre: "Techo Solar",
    ods: ODS.EnergiaAsequible,
    presupuesto: 20000,
    impacto: {
        co2Reducido: 500,
        aguaAhorrada: 0
    }
};

// PROYECTO SOCIAL
const proyectoEducacion: Proyecto<ImpactoSocial> = {
    nombre: "Escuela de Código Inclusiva",
    ods: ODS.FinDeLaPobreza,
    presupuesto: 10000,
    impacto: {
        personasBeneficiadas: 50,
        horasFormacion: 200
    }
};

// UTILITY TYPE - OMIT
// Creamos versión pública sin presupuesto

type ProyectoPublico = Omit<Proyecto<any>, 'presupuesto'>;

function publicarProyecto(proyecto: ProyectoPublico) {
    console.log(`Publicando proyecto: ${proyecto.nombre} - ${proyecto.ods}`);
}

// PUBLICAMOS SIN MOSTRAR PRESUPUESTO
publicarProyecto(proyectoSolar);
publicarProyecto(proyectoEducacion);

