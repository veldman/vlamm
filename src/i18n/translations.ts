// tslint:disable:object-literal-sort-keys
export const translations = {
  "en-GB": {
    scroll: "scroll",
    companyIntro: `Vlamm is a sole proprietorship by Kenneth Veldman that has
    been set up to have a way of creating awesome large scale
    applications. This has the side effect of generating value for
    both the customer and me!`,
    softwareArchitectureText: `Designing and setting up large scale software platforms on any
    desired system. From large monoliths to microservices,
    whatever fits the need of the customer and user.`,
    frontendDevelopmentText: `Creating responsive and interacive user interfaces. Using
    plain HTML5 / CSS3 and Javascript but also with the more
    advanced frameworks like`,
    backendDevelopmentText: `Making scalable solutions to handle changing requirements,
     usage and data flow. Done in various languages like Python and
     C#.`,
    currentlyLivingAndWorking: `Currently living in Groningen the Netherlands with
     my family and dog. Previously worked at Goldmund, Wyldebeast 
     & Wunderliebe and currently employed at Dairy Data Warehouse 
     as the technical lead of a scrum team.`,
    activitiesPrevCompanies: `Activities in companies I have worked at comprised of a
     mixture of development, architecture and training. Where my day-to-day task is 
     webdevelopment, more special projects like lightwalls and (huge) 
     programmable christmas trees are not abnormal.`
  },
  "nl-NL": {
    "Interested in working together? Let's talk.":
      "Geïnteresseerd om samen te werken?",
    "I'm always interested in working together":
      "Ik ben altijd geïnteresseerd!",
    scroll: "scroll",
    companyIntro: `Vlamm is een eenmansbedrijf van Kenneth Veldman dat opgezet
     is om een manier te hebben om grootschalige applicaties te ontwikkelen. 
     Deze wens heeft het bijeffect dat het waarde creëert voor zowel de klant 
     als mij!`,
    softwareArchitectureText: `Ontwerpen en het opzetten van grootschalige software 
    platformen op elk gewest systeem. Van grote monoliths tot microservices,
    wat past bij de behoefte van de klant en gebruiker.`,
    "Software Architecture": "Software Architectuur",
    "Front-end Development": "Front-end Ontwikkeling",
    frontendDevelopmentText: `Ontikkelen van responsive en interactieve user interfaces. 
    Gebruik makend van HTML5 / CSS3 en Javascript, maar ook van meer geavanceerde frameworks zoals`,
    backendDevelopmentText: `Schaalbare oplossingen maken om veranderende eisen,
         gebruik en gegevensstroom aan te kunnen. Gedaan in verschillende talen, zoals Python en
         C#.`,
    and: "en",
    "Back-end Development": "Back-end ontwikkeling",
    "Each icon tells a story, just ask me!":
      "Elk icoon verteld een verhaal, je kan het mij gewoon vragen!",
    "Web developer since a young age with an interest in every aspect of software and hardware.":
      "Webontwikkelaar van jongs af aan met een interesse in elk aspect van software en hardware.",
    currentlyLivingAndWorking: `
    Momenteel woon ik in Groningen met mijn gezin en mijn hond. Eerder gewerkt bij 
    Goldmund, Wyldebeast & Wunderliebe en momenteel werkzaam bij Dairy Data Warehouse als de technical lead 
    van een scrumteam.`,
    activitiesPrevCompanies: `
    Activiteiten in bedrijven waar ik heb gewerkt, bestaan ​​uit een mix van ontwikkeling, 
    architectuur en training. Waar mijn dagelijkse taak webontwikkeling is, zijn meer 
    speciale projecten zoals lichtmuren en (enorme) programmeerbare kerstbomen niet abnormaal.`
  }
};

export type Languages = keyof Readonly<typeof translations>;
