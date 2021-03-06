# ReactivePersistence

Reactive Persistence (R2DBC)

## Idea

UI with:

* status bar (threads, requests)
* some useful operations

## Application Logic


```
                 |= External WebService
UI = WebService =|
                 |= Database
```


## Open questions

* WebFlux Netty does not support HTTP/2, only Tomcat
* Do we need TLS for HTTP/2
* May we somehow interact with the audience?

## The Flow of Examples

* Blocking Web App (Spring WebMVC)
* Rx Web App (Spring WebFlux)
* Rx Web App with Blocking External Request (Http 11 Client)
* Rx Web App with Rx External Request (WebClient)
* Rx Web App with Rx External Request and Reactive DB
  * Cassandra
  * MongoDB
  * Couchbase
* Rx Web App with Rx External Request and Postgres
  * JDBC wrapped in Thread Pool
  * R2DBC
  
  
### Code snippets

```$bash
sudo PATH=$JAVA_HOME/bin:$PATH ./gradlew dockerBuildImage
```