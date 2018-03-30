# Things to know if you want to contribute to YAsAv

## The File organisation

```
├── package.json
├── app.json
├── locales - The locales files, for I18N
├── src
│   ├── App.js - Main App Component
│   ├── Routes.js - The Routes of the app
│   ├── assets (img/fonts)
│   ├── viewElements - Reusable Components 
│   │   ├── activty
│   │   │   ├── Card.js
│   │   │   └── List.js
│   │   ├── ...
│   │   └── shared
│   ├── config
│   │   ├── constants.js - Constants and Configs
│   ├── components
│   │   ├── activity
│   │   │   ├── screens
│   │   │   │   ├── ActivityAdd
│   │   │   │   │   ├── ActivityAddScreen.js (contain navigation)
│   │   │   │   │   ├── actions
│   │   │   │   │   │   ├── index.js - Action Creators
│   │   │   │   │   │   └── types.js - Action Types
│   │   │   │   │   ├── containers
│   │   │   │   │   │   └── ActivityAddContainer.js - Logic part of the container
│   │   │   │   │   ├── views
│   │   │   │   │   │   └── ActivityAddView.js - Display part of the container
│   │   │   │   │   └── styles
│   │   │   │   │       └── style.js
│   │   │   │   ├── ActivityList
│   │   │   │   │   ├── ActivityListScreen.js (contain navigation)
│   │   │   │   │   ├── actions
│   │   │   │   │   │   ├── index.js - Action Creators
│   │   │   │   │   │   └── types.js - Action Types
│   │   │   │   │   ├── containers
│   │   │   │   │   │   └── ActivityListContainer.js - Logic part of the container
│   │   │   │   │   ├── views
│   │   │   │   │   │   └── ActivityListView.js - Display part of the container
│   │   │   │   │   └── styles
│   │   │   │   │       └── style.js
│   │   │   │   └── ...
│   │   │   └── reducers
│   │   │       ├── index.js - Redux Module 
│   │   │       └── reducers.js - Redux Module Reducers
│   │   ├── Home
│   │   │   ├── ActivityListScreen.js (contain navigation)
│   │   │   ├── actions
│   │   │   │   ├── index.js - Action Creators
│   │   │   │   └── types.js - Action Types
│   │   │   ├── containers
│   │   │   │   └── ActivityListContainer.js - Logic part of the container
│   │   │   ├── views
│   │   │   │   └── ActivityListView.js - Display part of the container
│   │   │   ├── styles
│   │   │   |   └── style.js
│   │   │   └── reducers
│   │   │       ├── index.js - Redux Module 
│   │   │       └── reducers.js - Redux Module Reducers
│   │   └── ...
│   ├── store
│   │   ├── store.js
│   │   └── reducers.js
│   ├── styles
│   │   ├── commonStyles.js
│   │   └── ...
│   └── utils
│       ├── database-utils.js
│       └── globalFunctions.js
└── yarn.lock
```

## 