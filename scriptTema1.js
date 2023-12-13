document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "1. What does 'multiplayer' refer to in video games?",
            a: "A single-player game",
            b: "A game with multiple levels",
            c: "A game played by several players at the same time",
            d: "A game that is very complex",
            correct: "c",
            explanation: "'Multiplayer' se refiere a juegos jugados por varios jugadores al mismo tiempo, a menudo conectados a través de una red."        },
        {
            question: "2. What does 'CPU' stand for?",
            a: "Central Performance Unit",
            b: "Compact Processing Unit",
            c: "Central Processing Unit",
            d: "Computer Processing Unit",
            correct: "c",
            explanation: "'CPU' es la sigla de Central Processing Unit, que es el componente principal de una computadora que realiza la mayoría del procesamiento."        },
        {
            question: "3. Which of the following is an input device?",
            a: "Monitor",
            b: "Speaker",
            c: "Printer",
            d: "Keyboard",
            correct: "d",
            explanation: "Un teclado es un dispositivo de entrada utilizado para introducir información en una computadora."        },
        {
            question: "4. What is a 'bug' in computer programming?",
            a: "A feature of a program",
            b: "A computer virus",
            c: "An error in a program",
            d: "A type of computer hardware",
            correct: "c",
            explanation: "En programación informática, un 'bug' es un error en un programa que causa su funcionamiento incorrecto."        },
        {
            question: "5. What is the difference between 'high' and 'tall'?",
            a: "No difference, interchangeable",
            b: "'High' is used for living things, 'tall' for non-living things",
            c: "'High' is used for things wider than tall, 'tall' otherwise",
            d: "'High' is used for non-living things, 'tall' for living things",
            correct: "c",
            explanation: "'High' se usa para cosas que son más anchas que altas, mientras que 'tall' se usa para cosas que son más altas que anchas."        },
        {
            question: "6. What does the adverb 'quietly' mean?",
            a: "In a loud manner",
            b: "In a silent manner",
            c: "In a quick manner",
            d: "In a calm manner",
            correct: "d",
            explanation: "'Quietly' significa de manera tranquila, sin hacer mucho ruido."        },
        {
            question: "7. How is the adverb formed from the adjective 'careful'?",
            a: "Carefuly",
            b: "Carefull",
            c: "Carefuled",
            d: "Carefully",
            correct: "d",
            explanation: "El adverbio de 'careful' se forma agregando '-ly', resultando en 'carefully'."        },
        {
            question: "8. How do we form the adverb of manner from an adjective that ends in '-ly'?",
            a: "By adding '-lly'",
            b: "By adding '-ly'",
            c: "No adverb form is possible",
            d: "Using the phrase 'in a ... way'",
            correct: "d",
            explanation: "Cuando un adjetivo termina en '-ly', el adverbio de manera se forma usando la frase 'in a ... way'."        },
        {
            question: "9. Which sentence is an example of an adverb of manner?",
            a: "He hardly worked.",
            b: "He is a hard worker.",
            c: "He worked hard.",
            d: "He worked hardly.",
            correct: "c",
            explanation: "La frase 'He worked hard.' usa 'hard' como un adverbio de manera para describir cómo trabajó."        },
        {
            question: "10. What is an effective ergonomic practice when using a computer?",
            a: "Keep the mouse out of reach to exercise the arms.",
            b: "Use a flat keyboard to increase typing speed.",
            c: "Sit far from the screen to see the entire area.",
            d: "Place the screen at eye level or just below.",
            correct: "d",
            explanation: "Colocar la pantalla a la altura de los ojos o justo debajo es efectivo para mantener una buena postura y evitar tensiones."        
        },
        {
            question: "11. Which term is used to describe a system that allows multiple computers to connect and communicate?",
            a: "Multiuser",
            b: "Multitasking",
            c: "Multiprocessing",
            d: "Networking",
            correct: "d",
            explanation: "'Networking' describe la conexión y comunicación entre múltiples computadoras o sistemas."
        },
        {
            question: "12. In computer terms, what does 'boot' mean?",
            a: "To shut down the system",
            b: "To start up the system",
            c: "To connect to the internet",
            d: "To remove a device safely",
            correct: "b",
            explanation: "'Boot' un sistema significa iniciarlo o arrancar su sistema operativo."
        },
        {
            question: "13. What is 'backup' in the context of computer data?",
            a: "To scan for viruses",
            b: "To increase data storage",
            c: "To save a copy of data as a precaution",
            d: "To update the software",
            correct: "c",
            explanation: "Un 'backup' es una copia de seguridad de datos hecha para protegerse contra la pérdida de datos."
        },
        {
            question: "14. What does 'delete' mean in computer operations?",
            a: "To copy a file",
            b: "To move a file",
            c: "To rename a file",
            d: "To remove a file",
            correct: "d",
            explanation: "'Delete' se refiere a la eliminación de un archivo del sistema informático."
        },
        {
            question: "15. Which of the following is a storage device?",
            a: "Memory stick",
            b: "Mouse",
            c: "Keyboard",
            d: "Monitor",
            correct: "a",
            explanation: "Un memory stick es un dispositivo portátil utilizado para almacenar datos."
        },
        {
            question: "16. What action does 'drag and drop' describe?",
            a: "To delete a file",
            b: "To select multiple files",
            c: "To move objects on the screen",
            d: "To draw on a digital canvas",
            correct: "c",
            explanation: "'Drag and drop' es una operación de ratón que permite hacer clic en un objeto y moverlo a una ubicación diferente en la pantalla."
        },
        {
            question: "17. What is an 'update' in software terminology?",
            a: "A new installation",
            b: "A downgrade to an older version",
            c: "An improvement or fix to the software",
            d: "The removal of software",
            correct: "c",
            explanation: "Un 'update' generalmente se refiere a una versión más nueva del software que corrige errores o proporciona mejoras."
        },
        {
            question: "18. What is the primary function of a 'search engine'?",
            a: "To store information",
            b: "To navigate websites",
            c: "To find information on the internet",
            d: "To update web content",
            correct: "c",
            explanation: "Un motor de búsqueda se utiliza para encontrar y recuperar información en Internet."
        },
        {
            question: "19. In ergonomic computer setup, what is the recommended position for a monitor?",
            a: "Level with the chin",
            b: "At arm's length away",
            c: "Above eye level",
            d: "At or just below eye level",
            correct: "d",
            explanation: "Ergonómicamente, un monitor debe estar posicionado a la altura de los ojos o justo debajo para reducir la tensión."
        },
        {
            question: "20. Which phrase describes the action of starting a computer's operating system?",
            a: "Logging on",
            b: "Booting up",
            c: "Backing up",
            d: "Running programs",
            correct: "b",
            explanation: "'Booting up' es el proceso de iniciar el sistema operativo de una computadora."
        },
        {
            question: "21. What is the primary function of the CPU in a computer?",
            a: "To store data",
            b: "To power the system",
            c: "To process instructions",
            d: "To output information",
            correct: "c",
            explanation: "El CPU, o Unidad Central de Procesamiento, a menudo se considera el cerebro de la computadora porque procesa instrucciones."
        },
        {
            question: "22. Which of these is an example of a computer peripheral?",
            a: "CPU",
            b: "RAM",
            c: "Keyboard",
            d: "Hard drive",
            correct: "c",
            explanation: "Los periféricos son dispositivos externos conectados a una computadora, como un teclado."
        },
        {
            question: "23. What are 'ports' on a computer used for?",
            a: "Increasing memory",
            b: "Connecting external devices",
            c: "Storing files",
            d: "Cooling the system",
            correct: "b",
            explanation: "Los puertos son enchufes en una computadora utilizados para conectar dispositivos externos."
        },
        {
            question: "24. What genre does a game that involves managing resources and planning to achieve objectives belong to?",
            a: "Action",
            b: "Adventure",
            c: "Role-playing",
            d: "Strategy",
            correct: "d",
            explanation: "Los juegos de estrategia involucran la gestión de recursos y la planificación para lograr objetivos."
        },
        {
            question: "25. Which type of video games are designed to simulate real-life activities?",
            a: "Action",
            b: "Simulation",
            c: "Adventure",
            d: "Role-playing",
            correct: "b",
            explanation: "Los juegos de simulación están diseñados para simular actividades de la vida real."
        },
        {
            question: "26. What is a potential negative effect of playing video games excessively?",
            a: "Improved problem-solving skills",
            b: "Enhanced strategic thinking",
            c: "Addiction",
            d: "Better hand-eye coordination",
            correct: "c",
            explanation: "Jugar videojuegos en exceso puede llevar a la adicción."
        },
        {
            question: "27. Which term refers to games played on a mobile phone?",
            a: "PC games",
            b: "Console games",
            c: "Arcade games",
            d: "Mobile phone games",
            correct: "d",
            explanation: "Los juegos jugados en un teléfono móvil se denominan juegos para teléfonos móviles."
        },
        {
            question: "28. What is the purpose of the main memory in a computer?",
            a: "To store the operating system",
            b: "To hold programs and data while they are being used",
            c: "To save files long-term",
            d: "To perform calculations",
            correct: "b",
            explanation: "La memoria principal, o RAM, contiene programas y datos mientras están siendo utilizados por el CPU."
        },
        {
            question: "29. Why should you place the mouse within reach when using a computer?",
            a: "To prevent strain injuries",
            b: "To improve typing speed",
            c: "To save desk space",
            d: "To enhance the mouse's responsiveness",
            correct: "a",
            explanation: "Colocar el ratón al alcance y apoyar el antebrazo puede ayudar a prevenir lesiones por tensión."
        },
        {
            question: "30. What change is expected from the trend of online shopping according to the document?",
            a: "Decreased consumption",
            b: "Higher costs for consumers",
            c: "Transformation in consumer behavior",
            d: "Less variety of products",
            correct: "c",
            explanation: "Se espera que las compras en línea transformen la forma en que las personas consumen, cambiando el comportamiento del consumidor."
        },
        {
            question: "31. What is the effect of adding 'ly' to the adjective 'quiet'?",
            a: "It becomes a noun.",
            b: "It becomes a verb.",
            c: "It becomes an adverb.",
            d: "It doesn't change the word class.",
            correct: "c",
            explanation: "Agregar 'ly' al adjetivo 'quiet' lo convierte en el adverbio 'quietly'."
        },
        {
            question: "32. What does the adverb 'well' come from?",
            a: "The adjective 'well'",
            b: "The adjective 'good'",
            c: "The adjective 'better'",
            d: "The adjective 'best'",
            correct: "b",
            explanation: "El adverbio 'well' proviene del adjetivo 'good'."
        },
        {
            question: "33. What does 'log in' mean in the context of computer use?",
            a: "To power off the computer",
            b: "To disconnect from the internet",
            c: "To connect to a computer using a username and password",
            d: "To exit a program",
            correct: "c",
            explanation: "Hacer 'log in' significa conectarse a un sistema informático utilizando un nombre de usuario y contraseña."
        },
        {
            question: "34. If you 'back up' your files, what are you doing?",
            a: "Deleting them",
            b: "Copying them",
            c: "Moving them to a new folder",
            d: "Renaming them",
            correct: "b",
            explanation: "Hacer 'back up' de archivos significa hacer una copia adicional de ellos como precaución."
        },
        {
            question: "35. What does the phrasal verb 'set up' refer to?",
            a: "To log out of a system",
            b: "To install a program or assemble a system",
            c: "To delete a program",
            d: "To disconnect a system",
            correct: "b",
            explanation: "'Set up' se refiere a instalar un nuevo programa de computadora o ensamblar un sistema informático."
        },
        {
            question: "36. What action does 'print out' describe?",
            a: "To display a document on screen",
            b: "To save a document",
            c: "To send a document to a printer",
            d: "To delete a document",
            correct: "c",
            explanation: "Hacer 'print out' significa enviar un documento electrónico a una impresora."
        },
        {
            question: "37. If someone 'hacked into' a system, what did they do?",
            a: "They legally accessed the system.",
            b: "They improved the system's security.",
            c: "They entered the system legally to perform maintenance.",
            d: "They entered the computer or network illegally.",
            correct: "d",
            explanation: "Hacer 'hack into' un sistema significa entrar en un ordenador o red de forma ilegal."
        },
        {
            question: "38. What happens when a computer 'goes down'?",
            a: "It starts up.",
            b: "It stops operating properly.",
            c: "It performs better.",
            d: "It updates its software.",
            correct: "b",
            explanation: "Cuando un ordenador 'goes down', deja de funcionar correctamente."
        },
        {
            question: "39. What is the result of 'wiping out' files?",
            a: "The files are copied to a backup.",
            b: "The files are moved to a new directory.",
            c: "The files are completely erased or deleted.",
            d: "The files are compressed to save space.",
            correct: "c",
            explanation: "Hacer 'wipe out' archivos significa borrarlos completamente."
        },
        {
            question: "40. What does it mean to 'filter out' in the context of email?",
            a: "To sort emails into folders",
            b: "To remove unwanted email messages",
            c: "To highlight important emails",
            d: "To forward emails automatically",
            correct: "b",
            explanation: "Hacer 'filter out' significa eliminar mensajes de correo electrónico no deseados, como el spam."
        },
        {
            question: "41. What is a phrasal verb?",
            a: "A verb that requires a direct object",
            b: "A verb followed by a preposition or adverb that changes the meaning",
            c: "A verb that can never be separated by its particles",
            d: "A formal way of speaking or writing",
            correct: "b",
            explanation: "Un phrasal verb es un verbo seguido de uno o dos adverbios o preposiciones que cambian el significado del verbo original."
        },
        {
            question: "42. What does the phrasal verb 'look after' mean?",
            a: "To expect something with excitement",
            b: "To give up something",
            c: "To take care of someone or something",
            d: "To search for something",
            correct: "c",
            explanation: "El phrasal verb 'look after' significa cuidar de alguien o algo."
        },
        {
            question: "43. Which phrasal verb means to enter a place or vehicle?",
            a: "Get in",
            b: "Get on",
            c: "Get along",
            d: "Get away",
            correct: "a",
            explanation: "El phrasal verb 'get in' significa entrar en un lugar o vehículo."
        },
        {
            question: "44. What does the phrasal verb 'take off' refer to?",
            a: "To depart or leave the ground",
            b: "To start a new project",
            c: "To remove something from a surface",
            d: "To reduce the price of an item",
            correct: "a",
            explanation: "El phrasal verb 'take off' se refiere a menudo a un avión que despega o más generalmente a salir o partir rápidamente."
        },
        {
            question: "45. What does it mean to 'give up'?",
            a: "To try harder to achieve something",
            b: "To start doing something regularly",
            c: "To continue doing something in a challenging situation",
            d: "To quit or stop doing something",
            correct: "d",
            explanation: "Hacer 'give up' significa renunciar o dejar de hacer algo, a menudo un hábito o una actividad regular."
        },
        {
            question: "46. What does 'hang up' mean in the context of a phone call?",
            a: "To display something on the wall",
            b: "To disconnect or end a phone call",
            c: "To wait on the line for a short period",
            d: "To put on a piece of clothing",
            correct: "b",
            explanation: "Hacer 'hang up' significa desconectar o terminar una llamada telefónica."
        },
        {
            question: "47. If you are told to 'hurry up', what are you being asked to do?",
            a: "To slow down",
            b: "To be more careful",
            c: "To take your time",
            d: "To speed up or do something more quickly",
            correct: "d",
            explanation: "Si te dicen que 'hurry up', te están pidiendo que hagas algo más rápidamente."
        },
        {
            question: "48. Which phrasal verb means to get along or have a good relationship with someone?",
            a: "Pick up",
            b: "Grow up",
            c: "Get along",
            d: "Tidy up",
            correct: "c",
            explanation: "El phrasal verb 'get along' significa llevarse bien con alguien."
        },
        {
            question: "49. What does 'pick up' mean in the context of learning?",
            a: "To collect someone or something",
            b: "To tidy a place",
            c: "To acquire knowledge or skills easily",
            d: "To physically lift something",
            correct: "c",
            explanation: "Hacer 'pick up' algo como un idioma o habilidad significa adquirir conocimientos o habilidades fácilmente o de forma informal."
        },
        {
            question: "50. If you 'put on' clothing, what are you doing?",
            a: "Taking it off",
            b: "Cleaning it",
            c: "Putting it away",
            d: "Dressing yourself in it",
            correct: "d",
            explanation: "Ponerse ropa significa vestirse con ella."
        }
        
        
        
        
    ];
    


const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

function loadQuiz() {
    const quizQuestions = quizData.map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
    }).join('');
    quizForm.innerHTML = quizQuestions;
}

function submitQuiz() {
    const answers = quizData.map((_, index) => {
        return document.querySelector(`input[name="question${index}"]:checked`)?.value;
    });

    let score = 0;
    let resultsHTML = '';

    answers.forEach((answer, index) => {
        const questionElement = document.getElementById(`question-${index}`);
        if (answer === quizData[index].correct) {
            score++;
            resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${index + 1}: correcta.</b></a> ${quizData[index].explanation}</p>`;
            questionElement.classList.remove('incorrect');
        } else {
            resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${index + 1}: INCORRECTA.</b></a> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
            questionElement.classList.add('incorrect');
        }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
}

window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
loadQuiz();
});
