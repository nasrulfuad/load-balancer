# 3 NodeJS app with 1 load balancer

<figure width="320" height="320">
  <video controls="true" allowfullscreen="true" poster="preview.png">
    <source src="video.mp4" type="video/mp4">
  </video>
</figure>


## How to use
- install docker and docker compose
- build the image :
    ```
    docker build -t nodeapp .
    ```
- run the container with :
    ```
    docker-compose run
    ```

## if you want to add or remove the specific app, just
- edit `haproxy.cfg` inside `haproxy` folder 
- add or remove your server in there
- also add or remove nodeapp inside `docker-compose.yml` file
- remove container with `docker-compose down`
- and add your new container with `docker-compose up`
