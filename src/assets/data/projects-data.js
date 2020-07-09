import BonsaiLogo from '../projects/bonsai-logo.png';
import LabelWiseLogo from '../projects/labelwise-logo.png';
import LeadersPrizeLogo from '../projects/leadersprize-logo.png';
import ClercLogo from '../projects/clerc-logo.png';
import CoindropLogo from '../projects/coindrop-logo.png';

export default [
  {
    name: 'LabelWise',
    icon: LabelWiseLogo,
    description: `
      Nutrition labels are difficult to read and interpret.
      LabelWise is a full-stack mobile application to visualize and gain insights into the
      nutritional content of packaged foods. Simply scan a nutrition/ingredient label
      to get automatic analysis of the food - including macronutrient breakdown and
      any warnings for additives that the food contains.
    `,
    highlights: [
      'The iOS app was built with SwiftUI and utilizes the new Combine framework to implement a Model-View-ViewModel (MVVM) state management structure',
      'The backend service was built with Python and hosted in Google Cloud using Google App Engine',
      'Google Vision was leveraged for text recognition - this allows for the automated parsing of nutritional information / ingredients from the scanned image',
    ],
    keywords: ['Swift', 'Python', 'Google Cloud'],
    links: [
      {
        iconName: 'github',
        name: 'iOS',
        url: 'https://github.com/frankfka/LabelWise-iOS',
      },
      {
        iconName: 'github',
        name: 'Backend',
        url: 'https://github.com/frankfka/LabelWise-Backend',
      },
      {
        iconName: 'youtube',
        name: 'Demo',
        url: 'https://www.youtube.com/watch?v=nDCk7Qt6Tj0',
      },
    ],
  },
  {
    name: 'Bonsai',
    icon: BonsaiLogo,
    description: `
      As a data-driven individual, I have always wanted to track my mental and physical well-being.
      To solve this problem, I created Bonsai - a health and wellness tracking application.
      Bonsai allows users to track items such as moods, activities, medications, and nutrition.
      More importantly, I built in data analytics so that users can gain valuable insight into their wellness trends.
      `,
    highlights: [
      'The Bonsai iOS app was built with Apple\'s new development libraries for Swift - SwiftUI',
      'Back up and restore using a Google account, using Google Firebase for authentication and Firestore for data storage',
      'Predictable and easily debuggable application state built with Redux best-practices',
    ],
    keywords: ['Swift', 'Firebase', 'MVVM'],
    links: [
      {
        iconName: 'github',
        name: 'iOS',
        url: 'https://github.com/frankfka/Bonsai-iOS',
      },
      {
        iconName: 'youtube',
        name: 'Demo',
        url: 'https://www.youtube.com/watch?v=EF82wqF1rSY',
      },
    ],
  },
  {
    name: 'Leaders Prize',
    icon: LeadersPrizeLogo,
    description: `
      Leaders Prize is a machine learning competition in the field of natural language processing (NLP).
      The goal was to build artificial intelligence capable of identifying fake news.
      The grand prize for the competition is $1M CAD. This competition served
      as an introduction into the realm of machine learning. I was both surprised and excited
      to place within the top 10 contestants to proceed onto phase 2 of the competition.
    `,
    highlights: [
      'Preprocessed messy text input using industry-standard libraries such as SpaCy and NLTK',
      'Used Keras, Pytorch, and Tensorflow to create and test a variety of ML architectures, including LSTMs. CNNs, and Transformers',
      'Created an end to end dockerized pipeline for running the machine learning algorithm',
    ],
    keywords: ['Python', 'ML', 'NLP'],
    links: [
      {
        iconName: 'generic',
        name: 'Competition',
        url: 'https://www.communitech.ca/about-us/our-operation/leaders-prize.html',
      },
    ],
  },
  {
    name: 'Clerc',
    icon: ClercLogo,
    description: `
      Clerc is a checkout-as-a-service platform that I built and launched with a fellow Engineering
      Physics student. The platform would allow customers to scan store items with our mobile app
      and pay directly through the application. This would greatly reduce waiting times at checkout
      queues and improve the customer experience for participating retailers.
    `,
    highlights: [
      'Responsible for designing, developing, and deploying a secure full-stack software service',
      'The customer-facing mobile apps were built with Swift for iOS and Kotlin for Android',
      'The vendor-facing web dashboard (for managing product names and prices) was written using ReactJS',
      'Our Ruby backend integrated with the Stripe API to process payments',
      'Google Firebase was used for user authentication and as a database',
    ],
    keywords: ['Swift', 'Kotlin', 'Ruby', 'Google Cloud'],
    links: [
      {
        iconName: 'github',
        name: 'iOS',
        url: 'https://github.com/frankfka/Clerc-iOS',
      },
      {
        iconName: 'github',
        name: 'Android',
        url: 'https://github.com/frankfka/Clerc-Android',
      },
      {
        iconName: 'github',
        name: 'Backend',
        url: 'https://github.com/frankfka/Clerc-Backend',
      },
      {
        iconName: 'github',
        name: 'Dashboard',
        url: 'https://github.com/frankfka/Clerc-Vendor-Dashboard',
      },
      {
        iconName: 'youtube',
        name: 'Demo',
        url: 'https://www.youtube.com/watch?v=6UCnzB2EgSE',
      },
    ],
  },
  {
    name: 'Coindrop',
    icon: CoindropLogo,
    description: `
      Coindrop is a MERN web application for the sharing of cryptocurrency payment information.
      Users can create a payment profile, which creates a unique and persisted set of payment options.
      Users can then share this profile with others so that their cryptocurrency payment information is easily viewable and accessible.
      `,
    highlights: [
      'The web frontend was built with ReactJS following Material Design guidelines',
      'The backend service was written in NodeJS and used MongoDB Atlas for data storage',
      'Docker was used extensively for development and deployment onto AWS Elastic Beanstalk',
    ],
    keywords: ['ReactJS', 'NodeJS', 'MongoDB', 'Docker', 'AWS'],
    links: [
      {
        iconName: 'github',
        name: 'Backend',
        url: 'https://github.com/frankfka/CoinDrop-Backend',
      },
      {
        iconName: 'github',
        name: 'Frontend',
        url: 'https://github.com/frankfka/CoinDrop-Frontend',
      },
      {
        iconName: 'youtube',
        name: 'Demo',
        url: 'https://www.youtube.com/watch?v=INIh8Kp4gSA',
      },
    ],
  },
];
