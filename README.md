# Sejutacita Test
Simple role based access control REST API with microservice architecture

## Admin credentials
```
username=admin
password=b1t3mysh1nym3t4lax3
```

## Postman Collection
[API Gateway Collection](http://139.162.26.200:3000/docs)


## Directories
```
builds: build scripts, dockerfiles
deployments: kubernetes deployment scripts
*-service|api-gateway: 
  app:
    configs: configuration files
    handlers: application logic layer
    middlewares: express middlewares
    models: mongoose models
    repositories: resource layer, could be database or external service
    routes: express routes
    seeders: db seeders
    utils: utility functions
```

## Architecture
Simple layout

![Simple layout](https://i.imgur.com/zTfiMvP.png)

More detailed one

![architecture](https://i.imgur.com/JB6zTz9.png)

## Login Flow
![Login Flow](https://i.imgur.com/1Mib33n.png)

## CRUD Flow
![CRUD Flow](https://i.imgur.com/QVVHkD9.png)
