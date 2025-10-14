# Test task for Ekapak

# Getting start

## Develop from source code

**Перед установкой и запуском проекта нужно переименовать  .env.example в .env**

```shell
bun install
bun dev
# or 
npm install
npm run dev
```

## Docker build

```shell
# Build image
docker build --pull -t bun-vite-nginx-ekapak .
# Run container
docker run --rm -d --name nginx-ekapak -p 3000:80 bun-vite-nginx-ekapak
# Stop container
docker stop nginx-ekapak
# Remove image
docker rmi bun-vite-nginx-ekapak
```