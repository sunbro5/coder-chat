POSTGRESS

docker run --name pqadmin -p 8085:8085 -e PGADMIN_DEFAULT_EMAIL=test@gmail.com -e PGADMIN_DEFAULT_PASSWORD=pass -e PGADMIN_LISTEN_PORT=8085  -d dpage/pgadmin4
docker run --name coder-postgres -p 5432:5432  -e POSTGRES_PASSWORD=pass -d postgres

RUNAPP

env DB_URL=jdbc:postgresql://192.168.0.107:5432/postgres,DB_USERNAME=postgres,DB_PASSWORD=pass
