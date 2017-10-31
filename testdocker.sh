#!/bin/bash
echo "Processing docker request..."
echo "input: $1 $2 $3"
echo;

if [$1 eq ""]; then
    echo "Options: ./test_docker (run|stop|remove|restart) (dockername) (localsrc)"
    exit;
fi;

if [$2 eq ""]; then
    echo "Error, you're missing the docker name"
    exit
fi
if [$3 eq ""]; then
    echo "Error, you're missing the local resource folder, e.g. ~/mybuild"
    exit
fi

case "$1" in
    "run")
        echo "Now running instance..."
        `docker run --name $2 -p 80:80 -v $3:/usr/share/nginx/html:ro -d nginx`
        ;;
    "stop")
        echo "Now stopping instance..."
        `docker stop $2
        ;;
    "remove")
        echo "Now removing instance..."
        `docker rm $2
        ;;
    "restart")
        echo "Restarting.."
        `docker stop $2`
        `docker rm $2`
        `docker run --name $2 -p 80:80 -v $3:/usr/share/nginx/html:ro -d nginx2`
        ;;
esac
