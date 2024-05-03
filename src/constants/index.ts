import aeLogo from '@/assets/ae.png'
import cgiLogo from '@/assets/cgi.png'
import hawkLogo from '@/assets/hawk.svg'
import welcomeLogo from '@/assets/welcome.png'

export const emailAddress = 'simon.haiounviet@gmail.com'

export const experiences = [
  {
    company: 'Welcome to the Jungle',
    companyLogo: welcomeLogo,
    duration: "Juin 2023 - Aujourd'hui",
    stack: ['React', 'GraphQL', 'Node.js', 'AWS'],
    description:
      "Développement du site web principal ainsi que de l'ATS (Applicant Tracking System)",
  },
  {
    company: 'Hawk',
    companyLogo: hawkLogo,
    duration: 'Février 2017 - Mai 2023',
    stack: ['Angular', 'React', 'Redux / NgRx', 'RxJS', 'Nx', 'Node.js', 'AWS'],
    description:
      "Développement d'une plateforme web programmatique (système d'enchères automatique en temps réel dans le domaine de la publicité)",
  },
  {
    company: 'CGI',
    companyLogo: cgiLogo,
    duration: '2015 - 2017',
    stack: ['Adobe AEM', 'AngularJS', 'Java 7', 'Symfony 2', 'Java Spring'],
    description:
      "J'ai pu travailler sur le portail client de EDF, sur un site intranet pour SNCF Réseau ainsi que le développement d'un site web pour les Notaires de France",
  },
]

export const fullExperiences = [
  ...experiences,
  {
    company: 'Auto-Entrepreneur',
    companyLogo: aeLogo,
    duration: '2018',
    stack: ['Angular5', 'Sails.js'],
    description:
      "Développement d'un site web pour une agence de communication spécialisée dans les contenus bien-être",
  },
  {
    company: 'Auto-Entrepreneur',
    companyLogo: aeLogo,
    duration: '2016',
    stack: ['AngularJS', 'Sails.js'],
    description:
      "Développement d'un site intranet pour Fruition Sciences leur permettant de gérer des arduinos via une interface web",
  },
  {
    company: 'Auto-Entrepreneur',
    companyLogo: aeLogo,
    duration: '2016',
    stack: ['Wordpress'],
    description:
      "Développement d'un site web pour une association spécialisée dans la formation continue des salariés du secteur hospitalier, des structures médico-sociales et des collectivités territoriales",
  },
  {
    company: 'Auto-Entrepreneur',
    companyLogo: aeLogo,
    duration: '2012-2014',
    stack: ['PHP 5', 'JQuery'],
    description:
      "Développement d'un moteur de recherche multicritère pour Bioversity International. Ce site permet à des scientifiques d'accéder à des références (livres, articles de journaux...) sur le thème de la banane : <a href='https://www.musalit.org/' class='text-blue-500' target='_blank'>Musalit</a>",
  },
]
