<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## ORDER MICROSERVICE
```
docker compose up -d
```

## DEV MODE
1. Clone repository
2. Create the `.env` based on `.env.template`
3. Run database with docker `docker compose up -d` 
4. Run nats server `docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats`
5. Start the project `npm run sdtart:dev`
