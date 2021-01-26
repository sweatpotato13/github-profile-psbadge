## Description

Profile badge for codeforces & atcoder & topcoder

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Using docker container
```bash
$ docker build -t psbadge . -f Dockerfile
$ docker run -d -p 3000:3000 --name psbadge psbadge 
```



## Example

* Codeforce
```
http://api.cutewisp.com/v1/cf/{handle}
```
![SS](http://api.cutewisp.com/v1/cf/CuteWisp)

* atcoder
```
http://api.cutewisp.com/v1/ac/{handle}
```
![SS](http://api.cutewisp.com/v1/ac/CuteWisp)

* Topcoder
```
http://api.cutewisp.com/v1/topcoder/{handle}
```
![SS](http://api.cutewisp.com/v1/topcoder/handle)
