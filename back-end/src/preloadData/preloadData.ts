import { Activity } from "../models/activity/activity";
import { Advice } from "../models/advice/advice";
import { Mangrullo } from "../models/mangrullo/mangrullo";
import { User } from "../models/user/user";
import { Car } from "../models/car/car";
import { Donation } from "../models/donation/donation";
import { PaymentBill } from "../models/paymentBill/paymentBill";
import { ReviewActivity } from "../models/reviewActivity/reviewActivity";
import { ReviewMangrullo } from "../models/reviewMangrullo/reviewMangrullo";
import { Ticket } from "../models/ticket/ticket";



async function preloadData() {
    await User.sync({ force: true });
    await Mangrullo.sync({ force: true });
    await Activity.sync({ force: true });
    await Advice.sync({ force: true });
    await ReviewActivity.sync({ force: true });
    await ReviewMangrullo.sync({ force: true });
    await Ticket.sync({ force: true });
    await Car.sync({ force: true });
    await PaymentBill.sync({ force: true });
    await Donation.sync({ force: true });


    //Usuarios
    await User.bulkCreate([
        {
            userName: "Javier Lopez",
            email: "javilop1311@gmail.com",
            password: "2323",
            typeIdentification: "DNI",
            numberIdentification: "34231256",
            rol: "Admin"
        },

        {
            userName: "Nestor Camilo ",
            email: "nestor1212@gmail.com",
            password: "2323",
            typeIdentification: "DNI",
            numberIdentification: "34231256",
            rol: "Admin"
        },

    ]);

    //Mangrullos
    await Mangrullo.bulkCreate([
        {
            zone: "Piedras Blancas",
            dangerousness: 1,
            image: "https://www.turismoentrerios.com/piedrasblancas/img/playas.jpg",
            qualification: 3,
            description: "Este Mangrullo es una torre rústica que sirve de atalaya en las proximidades de fortines, estancias y poblaciones de la pampa y otras regiones llanas. Su altura solía alcanzar entre 10 y 15 metros, y son construido con materiales finos y de alta duración, coronándose como una plataforma en la parte superior de las playas o ríos."
        },

        {
            zone: "La Costa",
            dangerousness: 1,
            image: "https://www.todoprovincial.com/wp-content/uploads/2019/11/la-costa.jpg",
            qualification: 3,
            description: "El mangrullo ubicado en la zona de La Costa se encuentra en un entorno seguro, con una peligrosidad mínima de 1, lo que lo convierte en un destino ideal para aquellos que buscan disfrutar de un ambiente tranquilo y apacible. La imagen proporcionada revela un paisaje costero impresionante, sugiriendo que el mangrullo se encuentra en una ubicación privilegiada, posiblemente cerca de la playa."
        },

        {
            zone: "Mar del Plata",
            dangerousness: 1,
            image: "https://as1.ftcdn.net/v2/jpg/01/18/77/76/1000_F_118777668_2QU6iaPbmly2RmiZbJi99DrnsNyyTroM.jpg",
            qualification: 2,
            description: "Mar del Plata, una icónica ciudad costera, se destaca por su baja peligrosidad (1) y su atractivo entorno marítimo. Ubicada en la costa, ofrece a sus residentes y visitantes una experiencia de vida tranquila y segura."
        },

        {
            zone: "Bariloche",
            dangerousness: 1,
            image: "https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/69/79/697964_ce708d6555d0961f0901bcf4fbb2966e6a80e309f1922a25cb00ebcbabc017ae/md.webp",
            qualification: 3,
            description: "El mangrullo ubicado en la zona de Bariloche exhibe un entorno pintoresco y tranquilo. Con una peligrosidad mínima (nivel 1), proporciona un ambiente seguro para aquellos que buscan disfrutar de la belleza natural sin preocupaciones significativas. La estructura, representada en la imagen proporcionada, destaca por su diseño y ubicación estratégica, permitiendo a los visitantes apreciar vistas panorámicas de la región."
        },

        {
            zone: "Posadas",
            dangerousness: 1,
            image: "https://comunicacion.misiones.gob.ar/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-22-at-18.43.40-1.jpeg",
            qualification: 3,
            description: "El mangrullo ubicado en la encantadora zona de Posadas presenta un entorno seguro con una calificación de peligrosidad de 1, indicando que es un lugar propicio para la exploración sin mayores preocupaciones. La imagen proporcionada revela un mangrullo con una estructura distintiva, rodeado por un entorno natural que sugiere una experiencia tranquila y agradable."
        },

        {
            zone: "Piedras NegrasBlancas de Costa",
            dangerousness: 1,
            image: "https://www.turismoentrerios.com/piedrasblancas/img/playas.jpg",
            qualification: 3,
            description: "Piedras Blancas es una encantadora zona caracterizada por su tranquilidad y seguridad, con un bajo índice de peligrosidad (1). Situada en un entorno pintoresco, esta área ofrece a residentes y visitantes una experiencia de vida apacible y serena."
        },

        {
            zone: "Pinamar",
            dangerousness: 1,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/c8/e4/67/casilla-de-guardavidas.jpg",
            qualification: 2,
            description: "El mangrullo en la zona de Pinamar se destaca por su entorno seguro, con una peligrosidad mínima de 1, proporcionando a los visitantes un lugar tranquilo para disfrutar de sus alrededores. La imagen proporcionada muestra una casilla de guardavidas, que aunque no es un mangrullo en el sentido tradicional, sugiere una ubicación costera con presencia de servicios de seguridad."
        },

        {
            zone: "Villa Gesell",
            dangerousness: 1,
            image: "https://comunicacion.misiones.gob.ar/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-22-at-18.43.40-1.jpeg",
            qualification: 3,
            description: "El mangrullo en la zona de Villa Gesell presenta un entorno seguro, con una peligrosidad mínima de 1, lo que sugiere un lugar propicio para la relajación y la exploración sin preocupaciones significativas. La imagen proporcionada muestra un mangrullo con una estructura que destaca en el entorno natural de Villa Gesell."
        }
    ]);


    //Activities
    await Activity.bulkCreate([
        {
            activityName: "Surf en las Olas",
            description: "Experimenta la emoción del surf en las impresionantes olas del océano. Ideal para aquellos que buscan aventura y desean mejorar sus habilidades de surf.",
            image: "https://surfinglatino.com/wp-content/uploads/2010/08/reef-clasic-1-1024x685.jpg",
            qualification: 4,
            price: 5000,
            state: "Pago",
            type: "Deportivo",
            mangrullos: [1, 2, 3, 4]
        },

        {
            activityName: "Vóley Playa",
            description: "Disfruta de un emocionante partido de vóley playa con amigos y familiares. Una actividad divertida y saludable bajo el sol.",
            image: "https://www.mardelplata.gob.ar/sites/default/files/xWhatsApp,P20Image,P202023-12-28,P20at,P2010.00.52.jpeg.pagespeed.ic.Uztq6j3KMG.webp",
            qualification: 3,
            price: 0,
            state: "Gratis",
            type: "Deportivo",
            mangrullos: [5, 6, 7, 8]
        },

        {
            activityName: "Bodyboard ",
            description: "Atrévete a deslizarte sobre las olas con tu tabla de bodyboard. Una experiencia emocionante y llena de adrenalina.",
            image: "https://boxscorenews.com/5-26-2011-10-39-35-PM-9681145.jpg",
            qualification: 4,
            price: 5500,
            state: "Pago",
            type: "Deportivo",
            mangrullos: [1, 3, 5, 7]
        },

        {
            activityName: "Carrera en la Playa",
            description: "Participa en una carrera en la arena. Desafía tu resistencia mientras disfrutas del paisaje costero.",
            image: "https://fotos.perfil.com/2014/01/18/trim/987/555/entrenados-corredores-de-la-maraton-del-desierto-que-se-realizo-la-semana-pasada-en-pinamar-la-proxima-es-en-villa-gesell-el-9-de-febrero-0853-g1.jpg",
            qualification: 4,
            price: 2500,
            state: "Pago",
            type: "Deportivo",
            mangrullos: [2, 4, 6, 8]
        },

        {
            activityName: "Vela Recreativa",
            description: "Experimenta la emoción de navegar con un velerito recreativo. Ideal para principiantes que quieren disfrutar del mar.",
            image: "https://escueladevelavalmayor.com/wp-content/uploads/2019/08/raquero_nin%CC%83os.jpg",
            qualification: 3,
            price: 4000,
            state: "Pago",
            type: "Deportivo",
            mangrullos: [1, 2, 3, 4]
        },

        {
            activityName: "Fútbol Playero",
            description: "Organiza un partido de fútbol en la playa con amigos. ¡Arena, sol y goles para una experiencia inolvidable!",
            image: "https://www.eldiarioweb.com/wp-content/uploads/2022/02/futbol-playa-.jpg",
            qualification: 3,
            price: 0,
            state: "Gratis",
            type: "Deportivo",
            mangrullos: [2, 4, 6, 8]
        },

        {
            activityName: "Vóley Playa",
            description: "Disfruta de una emocionante partidO de vóley playa con amigos y familiares. Una actividad divertida y saludable bajo el sol.",
            image: "https://www.mardelplata.gob.ar/sites/default/files/xWhatsApp,P20Image,P202023-12-28,P20at,P2010.00.52.jpeg.pagespeed.ic.Uztq6j3KMG.webp",
            qualification: 3,
            price: 0,
            state: "Gratis",
            type: "Deportivo",
            mangrullos: [1, 3, 5, 7]
        },

        {
            activityName: "Paddleboarding",
            description: " Prueba el Paddleboardin o surf de remo en aguas tranquilas. Una actividad relajante para disfrutar del entorno marino acompañado de tu tabla.",
            image: "https://watersportspro.co.uk/wp-content/uploads/2022/10/Loose-Weight-Paddleboarding.jpg",
            qualification: 4,
            price: 4800,
            state: "Pago",
            type: "Deportivo",
            mangrullos: [2, 4, 6, 8]
        },

        {
            activityName: "Entrenamiento Funcional en la Playa",
            description: "Participa en sesiones de entrenamiento funcional en la playa. Combina ejercicio y paisajes impresionantes para mantenerte en forma con los mejores instructores de la zona.",
            image: "https://lapancartadequintanaroo.com.mx/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-11-at-2.55.40-PM-1.jpeg",
            qualification: 4,
            price: 7500,
            state: "Pago",
            type: "Deportivo",
            mangrullos: [1, 2, 3, 4]
        },

        {
            activityName: "Surf en las Olas",
            description: "Experimenta la emoción del surf en las impresionantes olas del océano. Ideal para aquellos que buscan aventura y desean mejorar sus habilidades de surf.",
            image: "https://surfinglatino.com/wp-content/uploads/2010/08/reef-clasic-1-1024x685.jpg",
            qualification: 4,
            price: 5000,
            state: "Pago",
            type: "Deportivo",
            mangrullos: [3, 5, 7]
        },

        //Activities Culturales

        {
            activityName: "Conciertos al Atardecer",
            description: "Vive la magia de la música en vivo con conciertos al atardecer en la playa. Disfruta de melodías encantadoras mientras el sol se despide en el horizonte.",
            image: "https://cdeluruguay.gob.ar/images/2022/Diciembre/Fiesta_de_la_Playa_varios_aos_2.jpg",
            qualification: 5,
            price: 1000,
            state: "Pago",
            type: "Cultural",
            mangrullos: [2, 4, 6, 8]
        },

        {
            activityName: "Historias junto al Fuego",
            description: "Sumérgete en la tradición con noches de historias junto al fuego en la playa. Comparte cuentos y leyendas mientras las llamas bailan bajo las estrellas.",
            image: "https://www.bcsnoticias.mx/wp-content/uploads/2023/03/fogata-fuego-playa-acambar-vacaciones-clima-atardecer-generico-1-990x660.jpg",
            qualification: 5,
            price: 0,
            state: "Gratis",
            type: "Cultural",
            mangrullos: [1, 3, 5, 7]
        },

        {
            activityName: "Talleres de Percusión",
            description: "Descubre el ritmo y la percusión en la playa. Participa en talleres donde podrás aprender a tocar instrumentos musicales mientras las olas acompañan el compás.",
            image: "https://publicacionesdelsur.b-cdn.net/articulos/articulos-434193.jpg",
            qualification: 4,
            price: 1500,
            state: "Pago",
            type: "Cultural",
            mangrullos: [4, 2, 3, 7]
        },

        {
            activityName: "Historias junto al Fuego",
            description: "Sumérgete en la tradición con noches de historias junto al fuego en la playa. Comparte cuentos y leyendas mientras las llamas bailan bajo las estrellas.",
            image: "https://www.bcsnoticias.mx/wp-content/uploads/2023/03/fogata-fuego-playa-acambar-vacaciones-clima-atardecer-generico-1-990x660.jpg",
            qualification: 5,
            price: 0,
            state: "Gratis",
            type: "Cultural",
            mangrullos: [1, 2, 3, 4]
        },

        {
            activityName: "Noches de Cine en la Arena",
            description: "Disfruta de películas clásicas y estrenos cinematográficos mientras te relajas en la playa. Trae tu manta y palomitas para una experiencia de cine única.",
            image: "https://www.diaridetarragona.com/binrepository/768x440/0c8/768d432/none/15017645/JEND/1107-tarragona-cinema-1_241-1078589_20230711103311.jpg",
            qualification: 4,
            price: 0,
            state: "Gratis",
            type: "Cultural",
            mangrullos: [5, 7, 8]
        },

        {
            activityName: "Conciertos al Atardecer",
            description: "Vive la magia de la música en vivo con conciertos al atardecer en la playa. Disfruta de melodías encantadoras mientras el sol se despide en el horizonte.",
            image: "https://cdeluruguay.gob.ar/images/2022/Diciembre/Fiesta_de_la_Playa_varios_aos_2.jpg",
            qualification: 5,
            price: 1000,
            state: "Pago",
            type: "Cultural",
            mangrullos: [2, 4, 6, 8]
        },

        {
            activityName: "Exhibiciones de Arte en la Playa",
            description: "Explora exhibiciones de arte al aire libre con obras de artistas locales. Admira pinturas, esculturas y fotografías mientras el arte se fusiona con el entorno natural.",
            image: "https://www.valenciabonita.es/wp-content/uploads/2022/05/Festival-arte-urbano-playa-Gandia-750x375.jpg",
            qualification: 5,
            price: 0,
            state: "Gratis",
            type: "Cultural",
            mangrullos: [1, 2, 3, 4]
        },

        {
            activityName: "Festival de Danzas",
            description: "Sumérgete en la cultura tropical con un festival de danzas. Aprende y participa en bailes locales y tradicionales mientras la brisa marina acompaña la música.",
            image: "https://tn.com.ar/resizer/ObbodZDIaFhgt2Bciz9XrwnQwQ4=/1440x0/smart/filters:format(webp)/arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/47RT2BSJLJ2BJMHIZDVT2LXJRA.jpg",
            qualification: 4,
            price: 0,
            state: "Gratis",
            type: "Cultural",
            mangrullos: [1, 2, 3, 4]
        },

        {
            activityName: "Talleres de Percusión",
            description: "Descubre el ritmo y la percusión en la playa. Participa en talleres donde podrás aprender a tocar instrumentos musicales mientras las olas acompañan el compás.",
            image: "https://publicacionesdelsur.b-cdn.net/articulos/articulos-434193.jpg",
            qualification: 4,
            price: 500,
            state: "Pago",
            mangrullos: [2, 4, 6, 8]
            ,
        },

        //Activities Sanitarias

        {
            activityName: "Yoga al Aire Libre",
            description: "Relaja cuerpo y mente con una sesión de yoga frente al mar. Experimenta la serenidad y mejora tu bienestar general en un entorno paradisíaco.",
            image: "https://adab.red/wp-content/uploads/2016/06/taller-yoga-playa-blanes-adab.jpg",
            qualification: 4,
            price: 0,
            state: "Gratis",
            type: "Sanitario",
            mangrullos: [1, 2, 3, 4]
        },

        {
            activityName: "Curso RCP y primeros auxilios",
            description: "Participa de un taller básico de primeros auxilios y RCP que te permitirá estar preparado para cualquier posible situación que los amerite, cuidarnos es tarea de todos.",
            image: "https://www.cruzrojahuesca.org/wp-content/uploads/Simulacro_RCP_PrimerosAuxilios_Playa.jpg",
            qualification: 4,
            price: 0,
            state: "Gratis",
            type: "Sanitario",
            mangrullos: [2, 4, 6, 8]
        },

        {
            activityName: "Yoga al Aire Libre",
            description: "Relaja cuerpo y mente con una sesión de yoga frente al mar. Experimenta la serenidad y mejora tu bienestar general en un entorno paradisíaco.",
            image: "https://adab.red/wp-content/uploads/2016/06/taller-yoga-playa-blanes-adab.jpg",
            qualification: 4,
            price: 0,
            state: "Gratis",
            type: "Sanitario",
            mangrullos: [2, 4, 6, 8]
        },

        {
            activityName: "limpieza de Playas",
            description: "Asume un papel importante en el cuidado de las diferentes playas, comprométete con   el cuidado de la naturaleza y de los espacios.",
            image: "https://bravedivers.com/wp-content/uploads/como-debemos-hacer-una-limpieza-de-playas.jpg",
            qualification: 4,
            price: 0,
            state: "Gratis",
            type: "Sanitario",
            mangrullos: [1, 2, 3, 4]
        }
    ]);

    //Advice
    await Advice.bulkCreate([
        {
            title: "Revisa las condiciones climaticas",
            comment: "Antes de dirigirte a la playa, asegúrate de conocer las condiciones del mar. Consulta el pronóstico para evitar sorpresas desagradables.",
            image: "https://previews.123rf.com/images/mejn/mejn1703/mejn170300021/74791391-termómetro-con-cielo-y-sol-clima-caliente-en-verano-vector-de-dibujos-animados.jpg",
            gravity: 3
        },

        {
            title: "Protégete del sol adecuadamente",
            comment: "Usa protector solar, lleva una sombrilla y recuerda hidratarte. La prevención es clave para disfrutar de un día en la playa sin preocupaciones.",
            image: "https://images.hola.com/imagenes/estar-bien/20180726127646/protector-solar-errores/0-587-804/errores-cremasolar-t.jpg",
            gravity: 3
        },

        {
            title: "Identifica las zonas seguras para nadar",
            comment: "Antes de entrar al agua, familiarízate con las zonas designadas para nadar. Evita áreas con corrientes fuertes y presta atención a las señales de seguridad.",
            image: "https://imagenes.eldebate.com/files/vertical_composte_image/uploads/2022/06/25/62b6cb925899e.jpeg",
            gravity: 3
        },

        {
            title: "Mantén limpio el entorno",
            comment: "Colabora con la conservación del medio ambiente y la limpieza de la playa. Recoge tus residuos y fomenta prácticas responsables entre tus compañeros de playa.",
            image: "https://jetnews.com.mx/wp-content/uploads/2023/05/amigos-jovenes-recogiendo-basura-basura-playa-tropical-salvando-planeta-ecologia-indonesia-tailandia-filipinas.jpg",
            gravity: 3
        }
    ]);

    //ReviewMangrullo
    await Advice.bulkCreate([
        //aqui
    ]);

    //ReviewActivity
    await Advice.bulkCreate([
        //aqui
    ]);

    //Ticket
    await Advice.bulkCreate([
        //aqui
    ]);

    //Car
    await Advice.bulkCreate([
        //aqui
    ]);

    //PaymentBill
    await Advice.bulkCreate([
        //aqui
    ]);

    //Donation
    await Advice.bulkCreate([
        //aqui
    ]);
}

// preloadData().then(() => {
//     console.log("Datos precargados exitosamente");
// }).catch(error => {
//     console.error("Error al cargar datos:", error);
// });

export default preloadData;