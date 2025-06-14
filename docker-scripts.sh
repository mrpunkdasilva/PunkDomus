#!/bin/bash

# Script para facilitar operações Docker com o Punk Domus Blog

case "$1" in
  build)
    echo "Construindo a imagem Docker..."
    docker-compose build
    ;;
  start)
    echo "Iniciando o container..."
    docker-compose up -d
    echo "Aplicação disponível em http://localhost:3000"
    ;;
  stop)
    echo "Parando o container..."
    docker-compose down
    ;;
  restart)
    echo "Reiniciando o container..."
    docker-compose restart
    ;;
  logs)
    echo "Exibindo logs..."
    docker-compose logs -f
    ;;
  shell)
    echo "Abrindo shell no container..."
    docker-compose exec nuxt-app /bin/sh
    ;;
  status)
    echo "Status do container:"
    docker-compose ps
    ;;
  *)
    echo "Uso: $0 {build|start|stop|restart|logs|shell|status}"
    exit 1
    ;;
esac

exit 0