# Things to know if you want to contribute to YAsAv

## File organisation

```
.
├── package.json
├── app.json
├── src
│   ├── App.js - Main App Component
│   ├── Routes.js - Routes 
│   ├── assets (img/fonts ?)
│   ├── viewElements - Reusable Components
│   │   ├── activty
│   │   │   ├── Card.js
│   │   │   └── List.js
│   │   ├── ...
│   │   └── shared
│   ├── config
│   │   ├── constants.js - Constants and Configs
│   ├── sceens
│   │   ├── home
│   │   │   ├── home.js (contain navigation)
│   │   │   ├── actions
│   │   │   │   ├── index.js - Action Creators
│   │   │   │   └── types.js - Action Types
│   │   │   ├── containers
│   │   │   │   └── HomeContainer1.js - Logic part of the container
│   │   │   ├── views
│   │   │   │   └── HomeView1.js - Display part of the container
│   │   │   ├── styles
│   │   │   │   └── style.js
│   │   │   └── reducers
│   │   │       ├── index.js - Redux Module 
│   │   │       └── reducers.js - Redux Module Reducers
│   │   ├── (events)
│   │   ├── (navigation)
│   │   ├── ...
│   ├── store
│   │   ├── store.js
│   │   └── reducers.js
│   ├── styles
│   │   ├── commonStyle.js
│   │   └── ...
│   └── utils
│       ├── date-utils.js
│       ├── string-utils.js
│       ├── storage-utils.js
│       └── responsive-utils.js
└── yarn.lock
```